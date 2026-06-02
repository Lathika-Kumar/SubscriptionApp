import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/cartSlice';
import subscriptionPlans from '../data/subscriptionPlans';
import platforms from '../data/platforms';
import '../styles/SubscriptionPlans.css';

export default function SubscriptionPlans() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Group subscriptions by platform
  const groupedPlans = subscriptionPlans.reduce((acc, plan) => {
    const platform = platforms.find(p => p.id === plan.platformId);
    if (!acc[plan.platformId]) {
      acc[plan.platformId] = { platform, plans: [] };
    }
    acc[plan.platformId].plans.push(plan);
    return acc;
  }, {});

  const handleAddToCart = (plan) => {
    dispatch(addProduct(plan));
    alert(`${plan.name} subscription added to cart!`);
  };

  return (
    <div className="subscription-plans">
      <button className="back-btn" onClick={() => navigate('/')}>
        ← Back
      </button>

      <div className="subscription-header">
        <h1>🎬 Subscription Plans</h1>
        <p>Choose your perfect streaming experience</p>
      </div>

      <div className="platforms-subscriptions">
        {Object.entries(groupedPlans).map(([platformId, { platform, plans }]) => (
          <div key={platformId} className="platform-subscription-section">
            <div className="platform-header">
              <h2>{platform.emoji} {platform.name}</h2>
              <p>{platform.tagline}</p>
            </div>

            <div className="plans-grid">
              {plans.map(plan => (
                <div
                  key={plan.id}
                  className={`plan-card ${plan.badge === 'Best' ? 'featured' : ''}`}
                >
                  {plan.badge && (
                    <div className="plan-badge">{plan.badge}</div>
                  )}

                  <div className="plan-name">{plan.name}</div>

                  <div className="plan-price">
                    <span className="price-amount">₹{plan.price}</span>
                    <span className="price-duration">/{plan.duration}</span>
                  </div>

                  <div className="plan-features">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="feature">
                        <span className="check">✓</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    className="select-plan-btn"
                    onClick={() => handleAddToCart(plan)}
                  >
                    Select Plan
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
