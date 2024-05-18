import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartIcon = () => {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="cart-icon">
      <span>Cart ({totalItems})</span>
    </div>
  );
};

export default CartIcon;
