import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Orders() {
  const orders = useSelector((state) => state.cart.orders);

  if (!orders.length) {
    return (
      <div className="empty-subscriptions">
        <h2>No order history yet</h2>
        <p>Your recent purchases will appear here after checkout.</p>
        <Link to="/" className="btn primary">Start Shopping</Link>
      </div>
    );
  }

  return (
    <div className="my-subscriptions">
      <h2>Order History</h2>
      {orders.map((order) => (
        <section key={order.id} className="order-card">
          <div className="order-header">
            <div>
              <strong>Order #{order.id.slice(-6)}</strong>
              <p>{new Date(order.createdAt).toLocaleString()}</p>
            </div>
            <span className="price">${order.total.toFixed(2)}</span>
          </div>
          <ul className="order-history">
            {order.items.map((product) => (
              <li key={product.id} className="order-item">
                <span className="item-emoji">{product.emoji}</span>
                <div>
                  <strong>{product.title}</strong>
                  <p>{product.type || product.category} · Qty {product.quantity}</p>
                </div>
                <span>${(product.price * product.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
