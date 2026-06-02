import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { placeOrder } from '../redux/cartSlice';
import { Link, useNavigate } from 'react-router-dom';

export default function Checkout() {
  const { items, total } = useSelector((s) => s.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(placeOrder());
    navigate('/orders');
  };

  if (!items.length) {
    return (
      <div className="empty-cart">
        <h2>No items to checkout</h2>
        <Link to="/">Browse Products</Link>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      <ul className="summary">
        {items.map((product) => (
          <li key={product.id}>{product.title} × {product.quantity} — ${(product.price * product.quantity).toFixed(2)}</li>
        ))}
      </ul>
      <div className="total">Order Total: ${total.toFixed(2)}</div>

      <form onSubmit={handleSubmit} className="checkout-form">
        <input required placeholder="Name" />
        <input required placeholder="Email" type="email" />
        <button className="btn primary" type="submit">Pay ${total.toFixed(2)}</button>
      </form>
    </div>
  );
}
