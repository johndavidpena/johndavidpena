import AudioStyles from './Audio.module.css';

export default function Play(props) {
  const { handleClick } = props;

  return (
    <button
      className={AudioStyles.button}
      onClick={() => handleClick()}>
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z"></path></svg>
    </button>
  );
}
