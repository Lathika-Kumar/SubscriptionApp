import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/cartSlice';
import platforms from '../data/platforms';
import subscriptionPlans from '../data/subscriptionPlans';
import movies from '../data/movies';
import MovieCard from '../components/MovieCard';
import LanguageFilter from '../components/LanguageFilter';
import GenreSection from '../components/GenreSection';
import '../styles/Platform.css';

const GENRES = ['Action', 'Comedy', 'Thriller', 'Romance', 'Horror', 'Sci-Fi', 'Anime', 'Drama'];
const LANGUAGES = ['Tamil', 'English', 'Hindi', 'Malayalam', 'Telugu'];

export default function Platform() {
  const { platformId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const platform = platforms.find(p => p.id === platformId);
  const platformMovies = movies.filter(m => m.platformId === platformId);
  const platformPlans = subscriptionPlans.filter(p => p.platformId === platformId);

  if (!platform) {
    return (
      <div className="error-container">
        <h2>Platform not found</h2>
        <button onClick={() => navigate('/')}>← Back to Home</button>
      </div>
    );
  }

  // Filter movies by selected language
  const filteredMovies = selectedLanguage
    ? platformMovies.filter(m => m.language === selectedLanguage)
    : platformMovies;

  // Group movies by genre
  const moviesByGenre = GENRES.reduce((acc, genre) => {
    const genreMovies = filteredMovies.filter(m => m.genre === genre);
    if (genreMovies.length > 0) {
      acc[genre] = genreMovies;
    }
    return acc;
  }, {});

  const handleAddSubscription = (plan) => {
    dispatch(addProduct(plan));
    alert(`${plan.name} subscription added to cart!`);
  };

  return (
    <div className="platform-page">
      {/* Platform Banner */}
      <section className="platform-banner">
        <img src={platform.banner} alt={platform.name} className="banner-image" />
        <div className="banner-overlay"></div>
        <div className="banner-content">
          <button className="back-btn" onClick={() => navigate('/')}>
            ← Back
          </button>
          <div className="banner-text">
            <h1>{platform.emoji} {platform.name}</h1>
            <p>{platform.tagline}</p>
          </div>
        </div>
      </section>

      <div className="platform-content">
        {/* Subscription Plans Section */}
        <section className="plans-section">
          <div className="section-header">
            <h2>💳 Subscription Plans</h2>
          </div>

          <div className="plans-list">
            {platformPlans.length > 0 ? (
              platformPlans.map(plan => (
                <div key={plan.id} className="plan-item">
                  <div className="plan-info">
                    <h3>{plan.name}</h3>
                    <span className="plan-price">₹{plan.price}/{plan.duration}</span>
                  </div>
                  <div className="plan-features">
                    {plan.features.slice(0, 2).map((f, i) => (
                      <span key={i} className="feature-tag">{f}</span>
                    ))}
                  </div>
                  <button
                    className="add-plan-btn"
                    onClick={() => handleAddSubscription(plan)}
                  >
                    Add to Cart
                  </button>
                </div>
              ))
            ) : (
              <p>No plans available</p>
            )}
          </div>

          <button
            className="view-all-plans"
            onClick={() => navigate('/subscriptions')}
          >
            View All Plans →
          </button>
        </section>

        {/* Movies Section */}
        <section className="movies-section">
          <div className="section-header">
            <h2>🎬 Movies & Series</h2>
            <p>{filteredMovies.length} titles available</p>
          </div>

          {/* Language Filter */}
          <LanguageFilter
            selectedLanguage={selectedLanguage}
            onLanguageChange={setSelectedLanguage}
          />

          {/* Genre Sections */}
          <div className="genres-container">
            {Object.entries(moviesByGenre).map(([genre, genreMovies]) => (
              <GenreSection
                key={genre}
                genre={genre}
                movies={genreMovies}
              />
            ))}
          </div>

          {filteredMovies.length === 0 && (
            <div className="no-movies">
              <p>No movies available in {selectedLanguage || 'this platform'}</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
