import React from 'react';
import { useSelector } from 'react-redux';

export default function Orders() {
  const items = useSelector((s) => s.cart.items);

  if (!items.length) {
    return (
      <div className="empty-subscriptions">
        <h2>No orders yet</h2>
        <p>Complete a purchase to see your order history here.</p>
      </div>
    );
  }

  return (
    <div className="my-subscriptions">
      <h2>Order History</h2>
      <ul>
        {items.map((product) => (
          <li key={product.id}>{product.emoji} {product.title} × {product.quantity}</li>
        ))}
      </ul>
    </div>
  );
}
