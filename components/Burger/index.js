import BurgerStyles from './Burger.module.css';

const Burger = ({ open, setOpen }) => {
  const topStyleOpen = {
    transform: 'rotate(45deg)'
  }
  const topStyleClosed = {
    transform: 'rotate(0)'
  }
  const middleStyleOpen = {
    opacity: '0',
    transform: 'translateX(20px)'
  }
  const middleStyleClosed = {
    opacity: '1',
    transform: 'translateX(0)'
  }
  const bottomStyleOpen = {
    transform: 'rotate(-45deg)'
  }
  const bottomStyleClosed = {
    transform: 'rotate(0)'
  }

  return (
    <button open={open} onClick={() => setOpen(!open)}
      className={BurgerStyles.button}>
      <div style={open ? topStyleOpen : topStyleClosed} />
      <div style={open ? middleStyleOpen : middleStyleClosed} />
      <div style={open ? bottomStyleOpen : bottomStyleClosed} />
    </button>
  );
}

export default Burger;