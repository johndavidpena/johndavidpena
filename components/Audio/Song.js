import AudioStyles from './Audio.module.css';

function Song(props) {
  const { songName, songArtist } = props;

  return (
    <>
      <p className={AudioStyles.songName}>{songName}</p>
      <p className={AudioStyles.songArtist}>{songArtist}</p>
    </>
  );
}

export default Song;
