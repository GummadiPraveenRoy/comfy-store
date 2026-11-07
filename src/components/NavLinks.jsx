import { NavLink } from 'react-router-dom';

export default function NavLinks({ onNavigate }) {
  return (
    <>
      <li>
        <NavLink to="/" className="nav-link" onClick={onNavigate}>
          home
        </NavLink>
      </li>
      <li>
        <NavLink to="/products" className="nav-link" onClick={onNavigate}>
          products
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className="nav-link" onClick={onNavigate}>
          about
        </NavLink>
      </li>
    </>
  );
}
