import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useWindowSize } from '../hooks/useWindowSize';
import { NextSeo } from 'next-seo';
import MainStyles from '../stylesheets/Main.module.css';
import MongoForm from '../components/Forms/MongoForm';

const Index = ({ showForm, setShowForm }) => {
  const size = useWindowSize();
  let width = size.width;

  const [screenSize, setScreenSize] = useState('');
  const [loadVideo, setLoadVideo] = useState(false);

  useEffect(() => {
    if (width <= 640) {
      setScreenSize('mobile');
    } else if (width > 640) {
      setScreenSize('desktop');
    }
    return () => { };
  }, [width]);

  return (
    <>
      <Head>
        <title>John David Peña</title>
      </Head>

      <NextSeo
        title='John David Pena'
        description='John David Peña is a musician and realtor with eXp Realty in El Paso, Texas.'
        canonical='https://johndavidpena.com/'
      />

      {/* <h1 className={MainStyles.title}>John David Pena
        <span aria-hidden="true" className={MainStyles.arrow}>&nbsp;🎸</span>
      </h1> */}
      <br />
      <br />

      {!loadVideo && screenSize === 'mobile' && (
        <div className={MainStyles.thumbnailContainer}>
          <button onClick={() => setLoadVideo(true)}>CLICK To WATCH</button>
          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1600706744/johndavidpena/thumbnails/sole-sticker-thumbnail-400.jpg' alt='sole-sticker-john-pena' title='sole-sticker-john-pena' />
        </div>
      )}

      {!loadVideo && screenSize === 'desktop' && (
        <div className={MainStyles.thumbnailContainer}>
          <button onClick={() => setLoadVideo(true)}>CLICK To WATCH</button>
          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1600706744/johndavidpena/thumbnails/sole-sticker-thumbnail-700.jpg' alt='sole-sticker-john-pena' title='sole-sticker-john-pena' />
        </div>
      )}

      {loadVideo && <div className={MainStyles.videoContainer}>
        <div className={MainStyles.videoResponsive}>
          <iframe title='sole-sticker-john-pena' width="560" height="315" src="https://www.youtube.com/embed/Au4wT7XdF2s" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </div>}

      {showForm && (
        <MongoForm showForm={showForm} setShowForm={setShowForm} />
      )}

      {!showForm && (
        <p className={MainStyles.subHeading2}>Thanks!</p>
      )}
    </>
  );
}

export default Index;
