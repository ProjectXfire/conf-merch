import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingBasket } from 'react-icons/fa';
import { AppContext } from '../../context/AppContex';
import './index.scss';

const Header = () => {

  const { state } = useContext(AppContext);
  const { cart } = state;

  return (
    <div className='Header'>
      <h1 className='Header__title'>
        <Link to='/'>PlatziConf Merch</Link>
      </h1>
      <div className='Header__checkout'>
        <Link to='/checkout'>
          <FaShoppingBasket />
        </Link>
        {
          (cart.length > 0) && (
            <div className='Header__alert'>{ cart.length }</div>
          )
        }
      </div>
    </div>
  );
};

export default Header;