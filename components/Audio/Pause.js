import AudioStyles from './Audio.module.css';

export default function Play(props) {
  const { handleClick } = props;

  return (
    <button className={AudioStyles.button} onClick={() => handleClick()}>
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M304 176h80v672h-80zm408 0h-64c-4.4 0-8 3.6-8 8v656c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V184c0-4.4-3.6-8-8-8z"></path></svg>
    </button>
  );
}
