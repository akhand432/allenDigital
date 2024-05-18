import React, { useEffect, useState } from 'react';
import Product from './Product';
import ErrorLoading from './ErrorLoading';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
    .then(response => response.json())
    .then(json => {
      setProducts([json.products]);
  });
  },[]);
  console.log(products);
  return (
    <div className="product-list">
      {products[0] && products[0].length > 0 ? products[0].map((product,index) => (
        <Product key={index} product={product} />
      )): <ErrorLoading />}
    </div>
  );
};

export default ProductList;
