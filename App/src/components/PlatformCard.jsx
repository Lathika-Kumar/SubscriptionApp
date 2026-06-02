import { useNavigate } from 'react-router-dom';
import '../styles/PlatformCard.css';

export default function PlatformCard({ platform }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/platform/${platform.id}`);
  };

  return (
    <div className="platform-card" onClick={handleClick}>
      <div className="platform-banner">
        <img src={platform.banner} alt={platform.name} />
        <div className="platform-overlay"></div>
      </div>

      <div className="platform-card-body">
        <div className="platform-icon">{platform.emoji}</div>

        <h3 className="platform-name">{platform.name}</h3>

        <p className="platform-tagline">{platform.tagline}</p>

        <p className="platform-description">{platform.description}</p>

        <div className="platform-cta">
          <button className="explore-btn">
            Explore Now →
          </button>
        </div>
      </div>
    </div>
  );
}
