import MainStyles from '../../../stylesheets/Main.module.css';
import PostSpacer from '../../../components/Spacers/PostSpacer';
import Post001 from '../../../components/MusicPosts/001';
import Post002 from '../../../components/MusicPosts/002';

const BlogPage = () => (
  <>
    {/* <h1 className={MainStyles.SEOpageTitle}>John David Peña, El Paso realtor and musician. Music blog</h1> */}

    <PostSpacer text='Apr 14' />

    <Post002 />

    <PostSpacer text='Mar 4' />

    <Post001 />
  </>
);

export default BlogPage;
