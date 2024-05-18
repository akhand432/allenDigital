import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CartProvider from './context/CartContext';
import ProductList from './components/ProductList';
import CartPage from './components/CartPage';
import CartIcon from './components/CartIcon';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <header>
          <Link to="/">Home</Link>
          <Link to="/cart"><CartIcon /></Link>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<ProductList/>} />
            <Route path='/cart' element={<CartPage/>} />
          </Routes>
        </main>
      </Router>
    </CartProvider>
  );
};

export default App;

 
