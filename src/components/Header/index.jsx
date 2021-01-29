import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const Header = () => (
  <div className='Header'>
    <h1 className='Header__title'>
      <Link to='/'>PlatziConf Merch</Link>
    </h1>
    <div className='Header__checkout'>
      <Link to='/checkout'>Checkout</Link>
    </div>
  </div>
)

export default Header;