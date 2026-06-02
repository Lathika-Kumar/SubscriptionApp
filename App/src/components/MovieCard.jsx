import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/cartSlice';
import '../styles/MovieCard.css';

export default function MovieCard({ movie }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    dispatch(addProduct(movie));
    alert(`${movie.title} added to cart!`);
  };

  const handleViewDetails = () => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <div className="movie-card" onClick={handleViewDetails}>
      <div className="movie-poster-wrapper">
        <img src={movie.poster} alt={movie.title} className="movie-poster" />
        <div className="movie-overlay">
          <div className="overlay-content">
            <h3>{movie.title}</h3>
            <p className="movie-rating">⭐ {movie.rating}/10</p>
            <p className="movie-year">{movie.year}</p>
          </div>
        </div>
      </div>

      <div className="movie-card-body">
        <h4 className="movie-title" title={movie.title}>{movie.title}</h4>

        <div className="movie-meta-info">
          <span className="language">{movie.language}</span>
          <span className="genre">{movie.genre}</span>
        </div>

        <div className="movie-card-footer">
          <span className="movie-price">₹{movie.price}</span>
          <button
            className="quick-add-btn"
            onClick={handleAddToCart}
            title="Add to Cart"
          >
            🛒
          </button>
        </div>
      </div>
    </div>
  );
}
