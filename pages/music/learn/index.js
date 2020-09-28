import Head from 'next/head';
import Link from 'next/link';
import MainStyles from '../../../stylesheets/Main.module.css';
import PostSpacer from '../../../components/Spacers/PostSpacer';

const BegLesson1 = () => (
  <div className={MainStyles.container}>
    <div className={MainStyles.videoResponsive}>
      <iframe title='Beginner Guitar Lesson 1' width="560" height="315" src="https://www.youtube.com/embed/Ffj9hU6kf3o" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
  </div>
);
const BegLesson2 = () => (
  <div className={MainStyles.container}>
    <div className={MainStyles.videoResponsive}>
      <iframe title='Beginner Guitar Lesson 2' width="560" height="315" src="https://www.youtube.com/embed/CU542t2PhME" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
  </div>
);
const BegLesson3 = () => (
  <div className={MainStyles.container}>
    <div className={MainStyles.videoResponsive}>
      <iframe title='Beginner Guitar Lesson 3' width="560" height="315" src="https://www.youtube.com/embed/7YckVmpaynU" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
  </div>
);

const IntLesson1 = () => (
  <div className={MainStyles.container}>
    <div className={MainStyles.videoResponsive}>
      <iframe title='Intermediate Guitar Lesson 1' width="560" height="315" src="https://www.youtube.com/embed/aQ6R1H2k-Ow" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
  </div>
);

const IntLesson2 = () => (
  <div className={MainStyles.container}>
    <div className={MainStyles.videoResponsive}>
      <iframe title='Intermediate Guitar Lesson 2' width="560" height="315" src="https://www.youtube.com/embed/EuDLMqganpo" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
  </div>
);

const IntLesson3 = () => (
  <div className={MainStyles.container}>
    <div className={MainStyles.videoResponsive}>
      <iframe title='Intermediate Guitar Lesson 3' width="560" height="315" src="https://www.youtube.com/embed/939Q2xwPmAM" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
  </div>
);

const LearnPage = () => (
  <>
    <Head>
      <title>John David Peña - Learn</title>
    </Head>
    <>
      <h1 className={MainStyles.SEOpageTitle}>John David Peña, El Paso realtor and musician. Music learn page</h1>

      <PostSpacer text='INT' />

      <IntLesson3 />

      <IntLesson2 />

      <IntLesson1 />

      <br />

      <PostSpacer text='BGR' />

      <BegLesson1 />

      <br />

      <BegLesson2 />

      <br />

      <BegLesson3 />
    </>
  </>
);

export default LearnPage;
