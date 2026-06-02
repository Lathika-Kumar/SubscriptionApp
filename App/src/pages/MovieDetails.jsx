import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/cartSlice';
import movies from '../data/movies';
import '../styles/MovieDetails.css';

export default function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const movie = movies.find(m => m.id === id);

  if (!movie) {
    return (
      <div className="movie-details-container">
        <h1>Movie not found</h1>
        <button onClick={() => navigate('/')}>Back to Home</button>
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch(addProduct(movie));
    alert(`${movie.title} added to cart!`);
  };

  return (
    <div className="movie-details">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="movie-details-content">
        <div className="movie-poster">
          <img src={movie.poster} alt={movie.title} />
          <div className="movie-badge">{movie.genre}</div>
        </div>

        <div className="movie-info">
          <h1>{movie.title}</h1>

          <div className="movie-meta">
            <span className="year">{movie.year}</span>
            <span className="rating">⭐ {movie.rating}/10</span>
            <span className="language">🎬 {movie.language}</span>
          </div>

          <p className="synopsis">{movie.synopsis}</p>

          <div className="actors">
            <h3>Cast</h3>
            <p>{movie.actors.join(', ')}</p>
          </div>

          <div className="price-section">
            <div className="price-display">
              <span className="price-label">Price:</span>
              <span className="price-amount">₹{movie.price}</span>
            </div>

            <button className="add-to-cart-btn" onClick={handleAddToCart}>
              🛒 Add to Cart
            </button>
          </div>

          <div className="movie-details-extra">
            <div className="detail-item">
              <span className="label">Platform:</span>
              <span className="value">{movie.platformId}</span>
            </div>
            <div className="detail-item">
              <span className="label">Genre:</span>
              <span className="value">{movie.genre}</span>
            </div>
            <div className="detail-item">
              <span className="label">Language:</span>
              <span className="value">{movie.language}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
