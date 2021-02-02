import React, { useContext } from 'react';
import './index.scss';
import { AppContext } from '../../context/AppContex';
import Map from '../../components/Map/index';
import useGoogleAddress from '../../hooks/useGoogleAddress';

const Success = () => {

  const { state } = useContext(AppContext);
  const { buyer } = state;
  const location = useGoogleAddress(buyer.address);

  return (
    <div className='Success'>
      <div className="Success__content">
        <h2>{`${buyer.name}, Gracias por tu compra`}</h2>
        <span>Tu pedido llegara en 3 dias a tu direccion</span>
        <div className='Success__map'>
          <Map data={location} />
        </div>
      </div>
    </div>
  );
};

export default Success;