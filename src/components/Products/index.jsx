import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContex';
import './index.scss';
import Product from '../Product/index';

function Products() {

  const { state, addToCart } = useContext(AppContext);
  const { products } = state;

  const handleAddToCart = (product) => {
    addToCart(product)
  }

  return (
    <div className='Products'>
      <div className='Products__items'>
        {
        products.map((product) => (
          <Product key={product.id} product={product} handleAddToCart={handleAddToCart} />
          ))
      }
      </div>
    </div>
  );
};

export default Products;
