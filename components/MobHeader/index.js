import { useRef } from 'react';
import Link from 'next/link';
import MHStyles from './MH.module.css';
import Burger from '../Burger';
import SideMenu from '../SideMenu';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';

const Header = ({ open, setOpen }) => {
  const node = React.useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <nav className={MHStyles.burger}>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <SideMenu open={open} setOpen={setOpen} />
      </div>

      <div className={MHStyles.nameContainer}>
        <Link href='/'>
          <a>
            <span className={MHStyles.firstName}>john</span>
            <span className={MHStyles.lastName}>peña
              <span aria-hidden="true" className={MHStyles.period}>.</span>
            </span>
          </a>
        </Link>
      </div>
    </nav>
  );
}

export default Header;