import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AppProvider } from '../context/AppContex';
import View from '../containers';
import '../global.scss';

const App = () => (
  <AppProvider>
    <BrowserRouter>
      <View.Layout>
        <Switch>
          <Route exact path="/" component={View.Home} />
          <Route exact path="/checkout" component={View.Checkout} />
          <Route exact path="/checkout/info" component={View.Information} />
          <Route exact path="/checkout/payment" component={View.Payment} />
          <Route exact path="/checkout/success" component={View.Success} />
          <Route component={View.NotFound} />
        </Switch>
      </View.Layout>
    </BrowserRouter>
  </AppProvider>
    )

export default App;