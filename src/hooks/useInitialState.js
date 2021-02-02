import { useState } from 'react';
import initialState from '../initialState';

const useInitialState = () => {
  const [state, setState] = useState(initialState);
  const addToCart = payload => {
    const alreadyAddedToCart = state.cart.find((product) => (product.id === payload.id));
    if (!alreadyAddedToCart) {
      payload.count = 1;
      setState({
        ...state,
        cart: [
          ...state.cart,
          payload
        ]
      });
    } else {
      alert('Ya se agrego al carrito');
    }
  };

  const removeFromCart = payload => {
    setState({
      ...state,
      cart: state.cart.filter(item => item.id !== payload.id)
    });
  };

  const addToBuyer = payload => {
    setState({
      ...state,
      buyer: {
        ...state.buyer,
        [payload.target.name]: payload.target.value
      }
    });
  };

  const addNewOrder = payload => {
    setState({
      ...state,
      orders: [...state.orders, payload]
    });
  }

  const plusItem = payload => {
    const update = state.cart.map(cart => ({...cart}));
    update.find(item => item.id === payload).count = update.find(item => item.id === payload).count + 1;
    setState({
      ...state,
      cart: update
    });
  };

  const lessItem = payload => {
    const validateMin = state.cart.find((item) => item.id === payload);
    if (validateMin.count > 1) {
      const update = state.cart.map(cart => ({...cart}));
      update.find(item => item.id === payload).count = update.find(item => item.id === payload).count - 1;
      setState({
        ...state,
        cart: update
      });
    }
  };

  return {
    addToCart,
    removeFromCart,
    plusItem,
    lessItem,
    addToBuyer,
    addNewOrder,
    state,
  }
}

export default useInitialState;

