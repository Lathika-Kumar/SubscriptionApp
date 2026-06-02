import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, decrementProduct, removeProduct, clearCart } from '../redux/cartSlice';
import { Link } from 'react-router-dom';

export default function Cart() {
  const dispatch = useDispatch();
  const { items, total } = useSelector((state) => state.cart);

  if (!items.length) {
    return (
      <div className="empty-cart">
        <h2>Your cart is empty</h2>
        <p>Search products and add the ones you love.</p>
        <Link to="/">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>

      <ul className="cart-list">
        {items.map((product) => (
          <li key={product.id} className="cart-item">
            <div className="left">
              <div className="emoji">{product.emoji}</div>
              <div>
                <div className="platform">{product.title}</div>
                <div className="meta">{product.category}</div>
              </div>
            </div>

            <div className="right">
              <div className="qty">
                <button onClick={() => dispatch(decrementProduct(product.id))}>-</button>
                <span>{product.quantity}</span>
                <button onClick={() => dispatch(addProduct(product))}>+</button>
              </div>
              <div className="price">${(product.price * product.quantity).toFixed(2)}</div>
              <button className="remove" onClick={() => dispatch(removeProduct(product.id))}>Remove</button>
            </div>
          </li>
        ))}
      </ul>

      <div className="cart-actions">
        <div className="total">Order Total: ${total.toFixed(2)}</div>
        <div className="action-buttons">
          <button className="btn" onClick={() => dispatch(clearCart())}>Clear Cart</button>
          <Link to="/checkout" className="btn primary">Proceed to Checkout</Link>
        </div>
      </div>
    </div>
  );
}
