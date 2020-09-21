import SMStyles from './SM.module.css';
import Link from 'next/link';

const Menu = ({ open, setOpen }) => {
  const openStyle = {
    transform: 'translateX(0)'
  }

  const closedStyle = {
    transform: 'translateX(-100%)'
  }
  return (
    <div open={open}
      className={SMStyles.menu}
      style={open ? openStyle : closedStyle}
    >
      <Link href='/'>
        <a onClick={() => setOpen(!open)}>Home</a>
      </Link>
      {/* <Link href='/music/index'>
        <a onClick={() => setOpen(!open)}>Music</a>
      </Link> */}
    </div>
  );
}

export default Menu;
