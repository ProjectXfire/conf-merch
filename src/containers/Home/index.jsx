import React from 'react';
import initialState from '../../initialState';
import Products from '../../components/Products/index';

const Home = () => (
  <div>
    <Products products={initialState.products} />
  </div>
)

export default Home;