import { Link } from 'react-router-dom';
import NavLinks from './NavLinks';
import { useCart } from '../context/CartContext';
import logoWhite from '../assets/images/logo-white.svg';
import logoBlack from '../assets/images/logo-black.svg';

export default function Navbar({ isHome, onOpenSidebar }) {
  const { itemCount, openCart } = useCart();

  return (
    <nav className={isHome ? 'navbar' : 'navbar page'}>
      <div className="nav-center">
        <div>
          <button className="toggle-nav" onClick={onOpenSidebar}>
            <i className="fas fa-bars"></i>
          </button>
          <ul className="nav-links">
            <NavLinks />
          </ul>
        </div>
        <Link to="/">
          <img
            src={isHome ? logoWhite : logoBlack}
            className="nav-logo"
            alt="logo"
          />
        </Link>
        <div className="toggle-container">
          <button className="toggle-cart" onClick={openCart}>
            <i className="fas fa-shopping-cart"></i>
          </button>
          <span className="cart-item-count">{itemCount}</span>
        </div>
      </div>
    </nav>
  );
}
