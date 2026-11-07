import { Link } from 'react-router-dom';

export default function Sidebar({ isOpen, onClose }) {
  return (
    <div className={`sidebar-overlay ${isOpen ? 'show' : ''}`}>
      <aside className="sidebar">
        <button className="sidebar-close" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>
        <ul className="sidebar-links">
          <li>
            <Link to="/" className="sidebar-link" onClick={onClose}>
              <i className="fas fa-home fa-fw"></i>
              home
            </Link>
          </li>
          <li>
            <Link to="/products" className="sidebar-link" onClick={onClose}>
              <i className="fas fa-couch fa-fw"></i>
              products
            </Link>
          </li>
          <li>
            <Link to="/about" className="sidebar-link" onClick={onClose}>
              <i className="fas fa-book fa-fw"></i>
              about
            </Link>
          </li>
        </ul>
      </aside>
    </div>
  );
}
