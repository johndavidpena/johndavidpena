import Link from 'next/link';
import NavStyles from './DeskNav.module.css';

const DeskNav = () => (
  <div className={NavStyles.DeskNav}>
    <ul className={NavStyles.navigation}>
      <li>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </li>
      {/* <li>
        <Link href='/music/index'>
          <a>Music</a>
        </Link>
      </li> */}
    </ul>

    <div className={NavStyles.nameContainer}>
      <Link href='/'>
        <a>
          <span className={NavStyles.firstName}>john</span>
          <span className={NavStyles.lastName}>peña
         <span aria-hidden="true" className={NavStyles.period}>.</span>
          </span>
        </a>
      </Link>
    </div>
  </div>
);

export default DeskNav;
