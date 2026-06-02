import { Link, useLocation } from 'react-router-dom';
import '../styles/Sidebar.css';

export default function Sidebar({ isOpen, onClose }) {
  const location = useLocation();

  const menuItems = [
    { path: '/', icon: '🏠', label: 'Home' },
    { path: '/subscriptions', icon: '🎯', label: 'Plans' },
    { path: '/cart', icon: '🛒', label: 'Cart' },
    { path: '/mypurchases', icon: '📜', label: 'My Purchases' },
  ];

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-sidebar" onClick={onClose}>✕</button>

      <nav className="sidebar-nav">
        {menuItems.map(item => (
          <Link
            key={item.path}
            to={item.path}
            className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
            onClick={onClose}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className="sidebar-footer">
        <p className="app-info">🎬 StreamVerse</p>
        <p className="tagline">Your Entertainment Hub</p>
      </div>
    </div>
  );
}
