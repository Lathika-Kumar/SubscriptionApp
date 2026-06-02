import PlatformCard from '../components/PlatformCard';
import platforms from '../data/platforms';
import '../styles/Home.css';

const CATEGORIES = [
  { id: 'video', emoji: '📺', label: 'Video Streaming' },
  { id: 'anime', emoji: '🌸', label: 'Anime' },
  { id: 'sports', emoji: '⚽', label: 'Sports' },
  { id: 'music', emoji: '🎵', label: 'Music' },
  { id: 'regional', emoji: '🌍', label: 'Regional' },
];

export default function Home() {
  const platformsByCategory = CATEGORIES.map(cat => ({
    ...cat,
    platforms: platforms.filter(p => p.category === cat.id),
  }));

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>🎬 StreamVerse</h1>
          <p className="hero-subtitle">Your Entertainment Universe</p>
          <p className="hero-description">
            Browse, buy, and subscribe to your favorite OTT platforms. Watch movies, series, sports, music, and regional content all in one place.
          </p>
        </div>
      </section>

      {/* Featured Section */}
      <section className="featured-section">
        <div className="section-header">
          <h2>⭐ Featured Platforms</h2>
          <p>Start your streaming journey</p>
        </div>
        <div className="featured-platforms">
          {platforms.slice(0, 5).map(platform => (
            <PlatformCard key={platform.id} platform={platform} />
          ))}
        </div>
      </section>

      {/* Categories Sections */}
      {platformsByCategory.map(category => (
        <section key={category.id} className="category-section">
          <div className="section-header">
            <h2>{category.emoji} {category.label}</h2>
            <p>{category.platforms.length} platforms available</p>
          </div>

          <div className="platforms-grid">
            {category.platforms.map(platform => (
              <PlatformCard key={platform.id} platform={platform} />
            ))}
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to explore?</h2>
          <p>Choose your favorite OTT platform and start streaming</p>
          <a href="#featured" className="cta-button">Browse Now</a>
        </div>
      </section>
    </div>
  );
}
