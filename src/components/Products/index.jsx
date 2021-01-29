import React from 'react';
import './index.scss';
import Product from '../Product/index';

function Products({ products }) {
  return (
    <div className='Products'>
      <div className='Products__items'>
        {
        products.map((product) => (
          <Product key={product.id} product={product} />
          ))
      }
      </div>
    </div>
  );
};

export default Products;
