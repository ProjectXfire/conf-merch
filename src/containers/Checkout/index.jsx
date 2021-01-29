import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const Checkout = () => (
  <div className='Checkout'>
    <div className="Checkout__content">
      <h3>Lista de pedidos:</h3>
      <div className='Checkout__item'>
        <div className='Checkout__element'>
          <h4>ITEM name</h4>
          <span>$10</span>
        </div>
        <button type='button'>Eliminar</button>
      </div>
    </div>
    <div className="Checkout__sidebar">
      <h3>Precio total: $10</h3>
      <Link to='/checkout/info'>
        <button type='button'>Continuar pedido</button>
      </Link>
    </div>
  </div>
)

export default Checkout;