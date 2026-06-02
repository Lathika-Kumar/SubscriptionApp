import React from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/cartSlice';

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <article className="product-card">
      <div className="card-header">
        <div className="badge">{product.badge}</div>
        <div className="emoji">{product.emoji}</div>
      </div>

      <h3>{product.title}</h3>
      <p className="subtitle">{product.tagline}</p>
      <p className="details">{product.details}</p>

      <div className="product-meta">
        <span>{product.category}</span>
        <span>{product.rating} ★</span>
        <span>{product.reviews}+ reviews</span>
      </div>

      <div className="card-footer">
        <div className="price">${product.price.toFixed(2)}</div>
        <button className="btn primary" onClick={() => dispatch(addProduct(product))}>
          Add to Cart
        </button>
      </div>
    </article>
  );
}
