import { Component } from 'react';
import metronomeWorker from '../../public/metronome.worker';

import {
  ACTION_START,
  ACTION_STOP,
  ACTION_UPDATE,
  ACTION_TICK,
  TICKS_PER_BEAT_BINARY,
  TICKS_PER_BEAT_TERNARY,
  SECONDS_IN_MINUTE,
  SCHEDULE_AHEAD_TIME,
  NOTE_LENGTH,
} from './constants';

// TODO: Put size.width into React Context for MMController to access
// let width = size.width;
// let bulletLeft;
// let multiplier;

// if (width <= 640) {
//   bulletLeft = '108.375px';
//   multiplier = 289;
// } else if (width > 640) {
//   bulletLeft = '216.75px';
//   multiplier = 578;
// }

class MMController extends Component {
  static defaultProps = {
    tempo: 120,
    bulletPos: 0.375,
    // bulletLeft,
    bulletLeft: '108.375px', // mobile 640 or less
    // bulletLeft: '216.75px', tablet/desktop 640 or more
    beatsPerMeasure: 4,
    subdivision: 1,
    beatFrequency: 880,
    beatVolume: 1,
    subdivisionFrequency: 440,
    subdivisionVolume: 0.5,
    autoplay: false,
    render: () => null,
    onTick: () => { },
    onSubtick: () => { },
    onStart: () => { },
    onStop: () => { },
  }

  constructor(props) {
    super(props)
    this.ticksPerBeat =
      this.props.beatsPerMeasure % 3 === 0 || this.props.subdivision % 3 === 0
        ? TICKS_PER_BEAT_TERNARY
        : TICKS_PER_BEAT_BINARY
    // NOTE: can't be called server side
    if (typeof window != 'undefined') {
      this.timerWorker = new Worker(metronomeWorker)

      // FIX: The AudioContext was not allowed to start.
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
      // console.log(this.audioContext);
    }

    this.nextNoteTime = 0
    this.currentBeat = 0

    this.state = {
      beat: 0,
      subBeat: 0,
      playing: this.props.autoplay === true,
      tempo: this.props.tempo,
      beatsPerMeasure: this.props.beatsPerMeasure,
      subdivision: this.props.subdivision,
    }
  }

  componentDidMount() {
    this.timerWorker.onmessage = event => {
      if (event.data === ACTION_TICK) {
        this.runScheduler()
      }
    }

    this.state.playing && this.start();
  }

  componentWillUnmount() {
    this.timerWorker.postMessage({
      action: ACTION_STOP,
    });
  }

  runScheduler = () => {
    while (
      this.nextNoteTime <
      this.audioContext.currentTime + SCHEDULE_AHEAD_TIME
    ) {
      this.tick(this.currentBeat, this.nextNoteTime)

      const secondsPerBeat = SECONDS_IN_MINUTE / this.state.tempo
      this.nextNoteTime +=
        this.state.beatsPerMeasure / this.ticksPerBeat * secondsPerBeat
      this.currentBeat++

      if (this.currentBeat === this.ticksPerBeat) {
        this.currentBeat = 0
      }
    }
  }

  tick = (beat, time) => {
    const isFirstBeat = beat === 0
    const isQuarterBeat =
      beat % (this.ticksPerBeat / this.state.beatsPerMeasure) === 0;
    const isTripletBeat =
      this.ticksPerBeat === TICKS_PER_BEAT_TERNARY &&
      beat % (this.ticksPerBeat / this.state.beatsPerMeasure) !== 0;
    const isEighthBeat =
      beat % (this.ticksPerBeat / (this.state.beatsPerMeasure * 2)) === 0;

    let playTick = false;

    const osc = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();
    osc.connect(gainNode);
    gainNode.connect(this.audioContext.destination);

    if (this.state.subdivision === 4) {
      playTick = true
      osc.frequency.setTargetAtTime(
        this.props.subdivisionFrequency,
        this.audioContext.currentTime,
        0.001
      );
      gainNode.gain.setTargetAtTime(
        this.props.subdivisionVolume,
        this.audioContext.currentTime,
        0.001
      );
    }

    if (this.state.subdivision === 3 && isTripletBeat) {
      playTick = true
      osc.frequency.setTargetAtTime(
        this.props.subdivisionFrequency,
        this.audioContext.currentTime,
        0.001
      );
      gainNode.gain.setTargetAtTime(
        this.props.subdivisionVolume,
        this.audioContext.currentTime,
        0.001
      );
    }

    if (this.state.subdivision === 2 && isEighthBeat) {
      playTick = true
      osc.frequency.setTargetAtTime(
        this.props.subdivisionFrequency,
        this.audioContext.currentTime,
        0.001
      );
      gainNode.gain.setTargetAtTime(
        this.props.subdivisionVolume,
        this.audioContext.currentTime,
        0.001
      );
    }

    if (isQuarterBeat) {
      playTick = true
      osc.frequency.setTargetAtTime(
        this.props.subdivisionFrequency,
        this.audioContext.currentTime,
        0.001
      );
      gainNode.gain.setTargetAtTime(
        this.props.beatVolume,
        this.audioContext.currentTime,
        0.001
      );
    }

    if (isFirstBeat) {
      playTick = true;
      osc.frequency.setTargetAtTime(
        this.props.beatFrequency,
        this.audioContext.currentTime,
        0.0001
      );
      gainNode.gain.setTargetAtTime(
        this.props.beatVolume,
        this.audioContext.currentTime,
        0.001
      );
    }

    if (isFirstBeat || isQuarterBeat) {
      this.setState(
        state => ({
          beat:
            state.beat === this.state.beatsPerMeasure ? 1 : state.beat + 1 || 1,
        }),
        () => {
          this.props.onTick(this.state);
        }
      );
    }

    if (playTick) {
      osc.start(time);
      osc.stop(time + NOTE_LENGTH);

      this.setState(
        state => ({
          subBeat:
            state.subBeat === this.state.subdivision
              ? 1
              : state.subBeat + 1 || 1,
        }),
        () => {
          this.props.onSubtick(this.state)
        }
      );
    }
  }

  start = () => {
    this.currentBeat = 0;
    this.nextNoteTime = this.audioContext.currentTime;

    this.timerWorker.postMessage({
      action: ACTION_START,
      tempo: this.state.tempo,
      subdivision: this.state.subdivision,
    });

    this.setState(
      {
        beat: 0,
        playing: true,
      },
      () => {
        this.props.onStart(this.state);
      }
    );
  }

  stop = () => {
    this.timerWorker.postMessage({
      action: ACTION_STOP,
    });

    this.setState(
      {
        playing: false,
      },
      () => {
        this.props.onStop(this.state);
      }
    );
  }

  onPlay = () => {
    this.state.playing ? this.stop() : this.start();
  }

  onTempoChange = tempo => {
    this.timerWorker.postMessage({
      action: ACTION_UPDATE,
    });

    this.setState({
      tempo,
      bulletPos: (tempo - 60) / 160,
      // bulletLeft: `${this.state.bulletPos * multiplier}px`
      bulletLeft: `${this.state.bulletPos * 289}px`, // mobile
      // bulletLeft: `${this.state.bulletPos * 578}px`, tablet/desktop
    });
  }

  render() {
    return this.props.render({
      ...this.state,
      onTempoChange: this.onTempoChange,
      onPlay: this.onPlay,
    });
  }
}

export default MMController;
