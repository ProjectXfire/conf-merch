import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import { AppContext } from '../../context/AppContex';
import totalCost from '../../utils/totalCost';
import './index.scss';

const Checkout = () => {
  const { state, removeFromCart, plusItem, lessItem } = useContext(AppContext);
  const { cart } = state;

  const handleRemoveItem = (item) => {
    removeFromCart(item);
  }

  const handleCount = (e, id) => {
    if (e.target.name === '+') {
      plusItem(id);
    } else {
      lessItem(id);
    }
  }

  return (
    <div className='Checkout'>
      {
        (cart.length > 0) ? (
          <>
            <div className="Checkout__content">
              <h3>Lista de pedidos:</h3>
              {
                cart.map((item) => (
                  <div key={item.id} className='Checkout__item'>
                    <div className='Checkout__element'>
                      <h4>{item.title}</h4>
                      <span>
                        {`$${item.price}`}
                        <button
                          type='button'
                          name='+'
                          onClick={(e) => handleCount(e, item.id)}
                        >
                          +
                        </button>
                        <input
                          className='Checkout__element--input'
                          type='number'
                          value={item.count}
                          readOnly
                        />
                        <button
                          type='button'
                          name='-'
                          onClick={(e) => handleCount(e, item.id)}
                        >
                          -
                        </button>
                      </span>
                    </div>
                    <button
                      type='button'
                      onClick={() => (handleRemoveItem(item))}
                    >
                      <FaTrash />
                    </button>
                  </div>
            )
          )
        }
            </div>
            <div className="Checkout__sidebar">
              <h3>
                {'Precio total: $'}
                { totalCost(cart) }
              </h3>
              <Link to='/checkout/info'>
                <button type='button'>Continuar pedido</button>
              </Link>
            </div>
          </>
        )
       :
          <h3>No hay pedidos</h3>
      }
    </div>
  );
};

export default Checkout;