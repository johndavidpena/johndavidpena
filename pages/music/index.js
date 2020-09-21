import Head from 'next/head';
import { NextSeo } from 'next-seo';
import MusicStyles from '../../stylesheets/Music.module.css';
import MainStyles from '../../stylesheets/Main.module.css';
import Link from 'next/link';

const MusicPage = () => (
  <>
    <Head>
      <title>John David Peña - Music</title>
    </Head>
    <>
      <NextSeo
        title='John David Pena'
        description='John David Peña is a musician and realtor in El Paso, Texas.'
        canonical='https://johndavidpena.com/music/index'
      />

      {/* <h1 className={MainStyles.SEOpageTitle}>John David Peña, El Paso realtor and musician. Music page</h1> */}

      <div className={MusicStyles.Music}>
        <Link href='/music/blog'>
          <div className={MusicStyles.bricksBlog}>
            <a className={MusicStyles.absCentered}>Blog</a>
          </div>
        </Link>

        <Link href='/music/learn'>
          <div className={MusicStyles.bricksLearn}>
            <a className={MusicStyles.absCentered}>Learn</a>
          </div>
        </Link>

        {/* <Link href='/music/metronome'>
        <div className={MusicStyles.bricks}>
          <a className={MusicStyles.absCentered}>Beat</a>
        </div>
      </Link> */}
      </div>
    </>
  </>
);

export default MusicPage;
