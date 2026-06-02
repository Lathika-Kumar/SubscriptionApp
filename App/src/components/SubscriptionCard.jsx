import React from 'react';
import { useDispatch } from 'react-redux';
import { addSubscription } from '../redux/cartSlice';

export default function SubscriptionCard({ subscription }) {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addSubscription(subscription));
  };

  return (
    <div className="card">
      <div className="card-head">
        <div className="emoji">{subscription.emoji}</div>
        <h3>{subscription.platform}</h3>
        <p className="plan">{subscription.plan}</p>
      </div>

      <div className="card-body">
        <p>Quality: {subscription.quality}</p>
        <p>Screens: {subscription.screens}</p>
        <p className="price">${subscription.price.toFixed(2)}</p>
      </div>

      <div className="card-footer">
        <button className="btn" onClick={handleAdd}>Add to Cart</button>
      </div>
    </div>
  );
}
