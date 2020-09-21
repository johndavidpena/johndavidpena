import BlogStyles from '../../../stylesheets/Blog.module.css';
import UntitledNoSolo from './UntitledNoSolo';
import UntitledSolo from './UntitledSolo';

const MusicPost001 = () => (
  <div>
    <h1 className={BlogStyles.longTitle}>The Rusty Improviser</h1>
    <p className={BlogStyles.postDate}>March 4, 2020</p>

    <div className={BlogStyles.topImageWrapper}>
      <img src="https://res.cloudinary.com/mimas-music/image/upload/v1583949974/johndavidpena/music%20blog%20assets/verticalNecks.jpg" alt="several electric guitars and bass guitars pictured vertically" />
      <p className={BlogStyles.credit}>Photo by Diego Catto on Unsplash</p>
    </div>

    <p><i>Improvising</i> means to compose and perform or deliver without previous preparation; to compose, play, recite, or sing on the spur of the moment. A great number of blues and jazz musicians operate in a world of improvisation, amongst others. This is a world that I used to live in (with limited success) but haven't spent much time in for awhile.</p>

    <p>The instrumental track below is a fun little thing that I recently recorded. My original intent was to see if I could use the progression in a song but I ended up just noodling over it with the guitar. This turned out to be pretty enjoyable and re-ignited a bit of passion around improvisation. Check it out below, no guitar noodling.</p>

    <UntitledNoSolo />

    <p>If you'd like to play the main guitar part, I've included the tablature below.</p>

    <div className={BlogStyles.imageWrapper}>
      <img src="https://res.cloudinary.com/mimas-music/image/upload/v1585675566/johndavidpena/music%20blog%20assets/UntitledTAB.jpg" alt="guitar tablature for the untitled track" />
    </div>

    <p>I recorded the first improvisation that I played and have included it below. You can here me fishing for the key/scale in the beginning. No doubt, this is pretty rusty to say the least and has plenty of imperfections, however, I include it here in hopes that future posts will show progress and improvement! In case you're wondering, I have a Line 6 FX pedal that has an onboard looping function that I make use of several times in the recording.</p>

    <UntitledSolo />

    <p>For my fellow musicians, the key of the track is D major. I'd love to hear your improvisation over the progression. Make a recording of yourself soloing over the track and share it with me!</p>
  </div>
);

export default MusicPost001;
