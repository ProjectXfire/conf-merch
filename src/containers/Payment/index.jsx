import React, {useContext} from 'react';
import { PayPalButton } from 'react-paypal-button';
import './index.scss';
import { AppContext } from '../../context/AppContex';
import totalCost from '../../utils/totalCost';

const Payment = ({ history }) => {

  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;

  const paypalOptions = {
    clientId: process.env.PAYPAL_ID,
    intent: 'capture',
    currency: 'USD'
  };

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  };

  const handlePaymentSuccess = (data) => {
    console.log(data);
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data
      };
      addNewOrder(newOrder);
      history.push('/checkout/success');
    };
  }

  return (
    <div className='Payment'>
      <div className='Payment__content'>
        <h3>Resumen del pedido</h3>
        <table className='Payment__table'>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            {
              cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.count}</td>
                  <td>{item.price}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
        <div>{totalCost(cart)}</div>
        <div className='Payment__button'>
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={totalCost(cart)}
            onPaymentStart={() => console.log('Start Payment')}
            onPaymentSuccess={(data) => handlePaymentSuccess(data)}
            onPaymentError={(error) => console.log(error)}
            onPaymentCancel={(data) => console.log(data)}
          />
        </div>
      </div>
      <div />
    </div>
  )
}

export default Payment;