import BlogStyles from '../../../stylesheets/Blog.module.css';
import BJJ1 from './BJJ1';

const MusicPost001 = () => (
  <div>
    <h1 className={BlogStyles.longTitle}>A Jiu Jitsu Song</h1>
    <p className={BlogStyles.postDate}>April 14, 2020</p>

    <div className={BlogStyles.topImageWrapper}>
      <img src="https://res.cloudinary.com/mimas-music/image/upload/v1586902999/johndavidpena/music%20blog%20assets/jiuJistuCrush.jpg" alt="a winged insect stands over the carcass of another" />
      <p className={BlogStyles.credit}>Photo by Benoit Gauzere on Unsplash</p>
    </div>

    <p>Several months ago I wrote this musical idea because I was really getting into Brazilian Jiu Jitsu. Writing a song seemed like a fun way to express some of the feelings I was having. What were some of those feelings and thoughts? Aggression, competition, war, overpower, intimidate, etc. Before I say much more, have a listen. Keep a watch out for the unintended audio magic that happens at 0:45.</p>

    <BJJ1 />

    <p>The lyrics so far...</p>

    <p><i className={BlogStyles.lyrics}>Step right up into this choke of mine</i><br />
      <i className={BlogStyles.lyrics}>Slip away it's fine, I'll bade my time</i><br />
      <i className={BlogStyles.lyrics}>Both of us can start, I'll be so bold</i><br />
      <i className={BlogStyles.lyrics}>To say that I'm the one who'll crush your soul.</i>
    </p>

    <p>This is the great thing about writing songs - you can pretty much say anything. After all, it's just a song, a bit of exaggeration or make believe thrown in for dramatic effect. Now, I love my fellow jiu jitsu partners and consider them friends. I would absolutely never do anything to purposefully hurt them or cause them harm in anyway.</p>

    <p>Nevertheless, song-writing has provided me with a healthy and entertaining way to express myself! This is one of the many things that I love about creating original music.</p>

    <p>So, this is a voice recording from my phone. I like to record musical ideas there and keep coming back to the ones I like. I'm not sure if this is a song idea that will go anywhere or not, it doesn't really matter. I do, however, enjoy adding other instruments and parts to songs so that's probably the next step in addition to writing more lyrics.</p>
  </div>
);

export default MusicPost001;
