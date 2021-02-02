import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './index.scss';
import { AppContext } from '../../context/AppContex';

const Information = () => {

  const history = useHistory();
  const { state, addToBuyer } = useContext(AppContext);
  const { cart, buyer } = state;
  const [ error, setError ] = useState({
    name: '', email: '', address: '',
    apto: '', city: '', country: '',
    state: '', namecp: '', phone: '',
  });

  const handleBuyer = (e) => {
    addToBuyer(e);
  }

  const handleSubmit = () => {
    const validFields = [];
    let errorFields = {};
    Object.keys(buyer).forEach((field) => {
      if (buyer[field] === '') {
        validFields.push(true);
        errorFields = {
          ...errorFields,
          [field]: `${field} es requerido`
        }
      } else {
        validFields.push(false);
        errorFields = {
          ...errorFields,
          [field]: ''
        }
      }
    });
    setError({
      ...errorFields
    });
    const checker = validFields.every(value => value === false);
    if (checker) {
      history.push('/checkout/payment');
    }
  }

  return (
    <div className='Information'>
      <div className='Information__content'>
        <div className='Information__head'>
          <h2>Información de contacto</h2>
        </div>
        <div className='Information__form'>
          <form>
            <input type="text" placeholder='Nombre completo' name='name' onChange={handleBuyer} value={buyer.name} />
            { error.name && <span className='Information__form--alert'>{error.name}</span> }
            <input type="text" placeholder='Correo electrónico' name='email' onChange={handleBuyer} value={buyer.email} />
            { error.email && <span className='Information__form--alert'>{error.email}</span> }
            <input type="text" placeholder='Dirección' name='address' onChange={handleBuyer} value={buyer.address} />
            { error.address && <span className='Information__form--alert'>{error.address}</span> }
            <input type="text" placeholder='Apto' name='apto' onChange={handleBuyer} value={buyer.apto} />
            { error.apto && <span className='Information__form--alert'>{error.apto}</span> }
            <input type="text" placeholder='Ciudad' name='city' onChange={handleBuyer} value={buyer.city} />
            { error.city && <span className='Information__form--alert'>{error.city}</span> }
            <input type="text" placeholder='País' name='country' onChange={handleBuyer} value={buyer.country} />
            { error.country && <span className='Information__form--alert'>{error.country}</span> }
            <input type="text" placeholder='Estado' name='state' onChange={handleBuyer} value={buyer.state} />
            { error.state && <span className='Information__form--alert'>{error.state}</span> }
            <input type="text" placeholder='Codigo Postal' name='namecp' onChange={handleBuyer} value={buyer.namecp} />
            { error.namecp && <span className='Information__form--alert'>{error.namecp}</span> }
            <input type="text" placeholder='Teléfono' name='phone' onChange={handleBuyer} value={buyer.phone} />
            { error.phone && <span className='Information__form--alert'>{error.phone}</span> }
          </form>
        </div>
        <div className='Information__buttons'>
          <div className='Information__back'>
            <Link to='/checkout'>Regresar</Link>
          </div>
          <div>
            <button
              type='submit'
              onClick={handleSubmit}
            >
              Pagar
            </button>
          </div>

        </div>
      </div>
      <div className='Information__sidebar'>
        <h3>Pedido:</h3>
        {
            cart.map((item) => (
              <div key={item.id} className='Information__item'>
                <div className='Information__element'>
                  <h4>{item.title}</h4>
                  <p>{`Qtty ${item.count} - $${item.price}`}</p>
                </div>
              </div>
            )
          )
        }
      </div>
    </div>
  );
};

export default Information;