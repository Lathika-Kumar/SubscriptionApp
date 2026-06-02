import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../styles/Navbar.css';

export default function Navbar({ onMenuClick }) {
  const quantity = useSelector(state => state.cart.quantity);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // TODO: Implement search functionality
      navigate(`/?search=${searchQuery}`);
      setSearchQuery('');
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-top">
        <button className="menu-toggle" onClick={onMenuClick}>
          ☰ Menu
        </button>

        <Link to="/" className="navbar-brand">
          <span className="brand-icon">🎬</span>
          <span className="brand-name">StreamVerse</span>
        </Link>

        <div className="navbar-actions">
          <form className="search-form" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search movies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <button type="submit" className="search-btn">🔍</button>
          </form>

          <Link to="/cart" className="cart-icon">
            🛒
            {quantity > 0 && <span className="cart-badge">{quantity}</span>}
          </Link>
        </div>
      </div>

      <div className="navbar-bottom">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/subscriptions" className="nav-link">Plans</Link>
        <Link to="/mypurchases" className="nav-link">My Purchases</Link>
      </div>
    </nav>
  );
}
