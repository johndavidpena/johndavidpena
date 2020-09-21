import Head from 'next/head';
import MMController from './MMController';
import metronomeStyles from './metronome.module.css';
import sliderStyles from './slider.module.css';

const Metronome = () => (
  <MMController
    tempo={120}
    render={({
      tempo,
      bulletLeft,
      beatsPerMeasure,
      playing,
      beat,
      onPlay,
      onTempoChange,
    }) => (
        <>
          <Head>
            <title>John David Peña - Metronome</title>
          </Head>

          <div className={sliderStyles.slider}>
            <div className={sliderStyles.rangeSlider}>
              <span
                className={sliderStyles.rsLabel}
                style={{ left: `${bulletLeft}` }}
              >{tempo}</span>

              <input
                onChange={event => onTempoChange(event.target.value)}
                className={sliderStyles.rsRange}
                type="range"
                value={tempo}
                min={60} max={220} />
            </div>

            <div className={sliderStyles.boxMinmax}>
              <span>60</span><span>220</span>
            </div>
          </div>

          <div className={metronomeStyles.bottom}>
            {playing ?
              <div onClick={onPlay}>
                <svg className={metronomeStyles.pa} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M304 176h80v672h-80zm408 0h-64c-4.4 0-8 3.6-8 8v656c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V184c0-4.4-3.6-8-8-8z"></path></svg>
              </div>
              :
              <div onClick={onPlay}>
                <svg className={metronomeStyles.pa} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z"></path></svg>
              </div>
            }

            <span className={metronomeStyles.beat}>
              {beat}/{beatsPerMeasure}
            </span>
          </div>
        </>
      )}
  />
);

export default Metronome;
