import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import '../App.css';

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const discountedPrice = (product.price * (1 - product.discountPercentage / 100)).toFixed(2);

  return (
    <div className="product">
      <img src={product.thumbnail} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      {product.discountPercentage ? (
        <p>
          <span className="price">${discountedPrice}</span>
          <span className="original-price">${product.price}</span>
        </p>
      ) : (
        <p>${product.price}</p>
      )}
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default Product;
