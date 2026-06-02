import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../styles/MyPurchases.css';

export default function MyPurchases() {
  const navigate = useNavigate();
  const orders = useSelector(state => state.cart.orders);
  const purchases = useSelector(state => state.user.purchases);
  const subscriptions = useSelector(state => state.user.subscriptions);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="my-purchases">
      <button className="back-btn" onClick={() => navigate('/')}>
        ← Back
      </button>

      <div className="purchases-header">
        <h1>📜 My Purchases & Subscriptions</h1>
        <p>View your complete purchase history</p>
      </div>

      {orders.length === 0 && purchases.length === 0 && subscriptions.length === 0 ? (
        <div className="empty-purchases">
          <div className="empty-icon">🛒</div>
          <h2>No purchases yet</h2>
          <p>Start exploring and add items to your cart</p>
          <button onClick={() => navigate('/')} className="explore-btn">
            Explore Content
          </button>
        </div>
      ) : (
        <div className="purchases-content">
          {/* Orders */}
          {orders.length > 0 && (
            <section className="orders-section">
              <h2>🎬 Recent Orders</h2>
              <div className="orders-list">
                {orders.map(order => (
                  <div key={order.id} className="order-card">
                    <div className="order-header">
                      <span className="order-id">{order.id}</span>
                      <span className="order-date">
                        {formatDate(order.createdAt)}
                      </span>
                    </div>

                    <div className="order-items">
                      <h3>Items ({order.items.length})</h3>
                      {order.items.map(item => (
                        <div key={item.id} className="order-item">
                          <img
                            src={item.poster || 'https://via.placeholder.com/50'}
                            alt={item.title}
                          />
                          <div className="item-details">
                            <p className="item-title">{item.title}</p>
                            <p className="item-meta">
                              {item.language} • {item.genre}
                            </p>
                          </div>
                          <span className="item-price">₹{item.price}</span>
                        </div>
                      ))}
                    </div>

                    <div className="order-total">
                      Total: <strong>₹{order.total}</strong>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Subscriptions */}
          {subscriptions.length > 0 && (
            <section className="subscriptions-section">
              <h2>🎯 Active Subscriptions</h2>
              <div className="subscriptions-list">
                {subscriptions.map(subscription => (
                  <div key={subscription.id} className="subscription-card">
                    <div className="subscription-header">
                      <h3>{subscription.name}</h3>
                      <span className="status">Active</span>
                    </div>
                    <p className="subscription-date">
                      Subscribed: {formatDate(subscription.subscribedAt)}
                    </p>
                    <div className="subscription-details">
                      <span>₹{subscription.price}/{subscription.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Direct Purchases */}
          {purchases.length > 0 && (
            <section className="direct-purchases-section">
              <h2>📽️ Direct Purchases</h2>
              <div className="purchases-list">
                {purchases.map(purchase => (
                  <div key={purchase.id} className="purchase-card">
                    <img
                      src={purchase.poster || 'https://via.placeholder.com/80'}
                      alt={purchase.title}
                    />
                    <div className="purchase-details">
                      <h4>{purchase.title}</h4>
                      <p>{purchase.language} • {purchase.genre}</p>
                      <span className="purchase-date">
                        {formatDate(purchase.purchasedAt)}
                      </span>
                    </div>
                    <span className="purchase-price">₹{purchase.price}</span>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      )}
    </div>
  );
}
