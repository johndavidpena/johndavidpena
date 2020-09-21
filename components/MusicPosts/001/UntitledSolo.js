import { useState, useEffect } from 'react';
import Song from '../../Audio/Song';
import Play from '../../Audio/Play';
import Pause from '../../Audio/Pause';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
import AudioStyles from '../../Audio/Audio.module.css';

function useAudioPlayer() {
  const [duration, setDuration] = useState();
  const [curTime, setCurTime] = useState();
  const [playing, setPlaying] = useState(false);
  const [clickedTime, setClickedTime] = useState();

  useEffect(() => {
    const audio = document.getElementById('track2');

    // state setters wrappers
    const setAudioData = () => {
      setDuration(audio.duration);
      setCurTime(audio.currentTime);
    }

    const setAudioTime = () => setCurTime(audio.currentTime);

    // DOM listeners: update React state on DOM events
    audio.addEventListener("loadeddata", setAudioData);

    audio.addEventListener("timeupdate", setAudioTime);

    // React state listeners: update DOM on React state changes
    playing ? audio.play() : audio.pause();

    if (clickedTime && clickedTime !== curTime) {
      audio.currentTime = clickedTime;
      setClickedTime(null);
    }

    // effect cleanup
    return () => {
      audio.removeEventListener("loadeddata", setAudioData);
      audio.removeEventListener("timeupdate", setAudioTime);
    }
  });

  return {
    curTime,
    duration,
    playing,
    setPlaying,
    setClickedTime
  }
}

const Bar = props => {
  const { duration, curTime, onTimeUpdate } = props;

  const curPercentage = (curTime / duration) * 100;

  function formatDuration(duration) {
    return moment
      .duration(duration, "seconds")
      .format("mm:ss", { trim: false });
  }

  function calcClickedTime(e) {
    const clickPositionInPage = e.pageX;
    const bar = document.querySelector("#track2bar");
    const barStart = bar.getBoundingClientRect().left + window.scrollX;
    const barWidth = bar.offsetWidth;
    const clickPositionInBar = clickPositionInPage - barStart;
    const timePerPixel = duration / barWidth;
    return timePerPixel * clickPositionInBar;
  }

  function handleTimeDrag(e) {
    onTimeUpdate(calcClickedTime(e));

    const updateTimeOnMove = eMove => {
      onTimeUpdate(calcClickedTime(eMove));
    };

    document.addEventListener("mousemove", updateTimeOnMove);

    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", updateTimeOnMove);
    });
  }

  return (
    <div className={AudioStyles.bar}>
      <span className={AudioStyles.bar__time}>{formatDuration(curTime)}</span>
      <div
        className={AudioStyles.bar__progress}
        id='track2bar'
        style={{
          background: `linear-gradient(to right, var(--rhone-orange) ${curPercentage}%, var(--rhone-darkBlueText) 0)`
        }}
        onMouseDown={e => handleTimeDrag(e)}
      >
        <span
          className={AudioStyles.bar__progress__knob}
          style={{ left: `${curPercentage - 2}%` }}
        />
      </div>
      <span className={AudioStyles.bar__time}>{formatDuration(duration)}</span>
    </div>
  );
}

function Track2() {
  const { curTime, duration, playing, setPlaying, setClickedTime } = useAudioPlayer();

  return (
    <div className={AudioStyles.wrapper}>
      <audio id='track2'>
        <source src='https://res.cloudinary.com/mimas-music/video/upload/v1583444010/johndavidpena/music%20blog%20assets/untitled_FINAL.mp3' />
        Your browser does not support the <code>audio</code> element.
      </audio>
      <Song songName="Untitled - Solo" songArtist="John Pena" />
      <div className={AudioStyles.controls}>
        {playing ?
          <Pause handleClick={() => setPlaying(false)} /> :
          <Play handleClick={() => setPlaying(true)} />
        }
        <Bar curTime={curTime} duration={duration} onTimeUpdate={(time) => setClickedTime(time)} />
      </div>
    </div>
  );
}

export default Track2;
