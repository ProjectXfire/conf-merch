import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const Information = () => (
  <div className='Information'>
    <div className='Information__content'>
      <div className='Information__head'>
        <h2>Información de contacto</h2>
      </div>
      <div className='Information-form'>
        <form action=''>
          <input type="text" placeholder='Nombre completo' name='name' />
          <input type="text" placeholder='Correo electrónico' name='email' />
          <input type="text" placeholder='Dirección' name='address' />
          <input type="text" placeholder='Apto' name='apto' />
          <input type="text" placeholder='Ciudad' name='city' />
          <input type="text" placeholder='País' name='country' />
          <input type="text" placeholder='Estado' name='state' />
          <input type="text" placeholder='Codigo Postal' name='namecp' />
          <input type="text" placeholder='Teléfono' name='phone' />
        </form>
      </div>
      <div className='Information__buttons'>
        <div className='Information__back'>
          <Link to='/checkout/'>Back</Link>
        </div>
        <div className='Information__next'>
          <Link to='/checkout/payment'>Pagar</Link>
        </div>
      </div>
    </div>
    <div className='Information__sidebar'>
      <h3>Pedido:</h3>
      <div className='Information__item'>
        <div className='Information__element'>
          <h4>ITEM Name</h4>
          <span>$10</span>
        </div>
      </div>
    </div>
  </div>
)

export default Information;