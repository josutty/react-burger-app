import React from 'react';
import Layout from './hoc/Layout/Layout'
import './App.css';
import BurgerBuilders from './containers/BurgerBuilders/BurgerBuilders'
import Checkout from './containers/Checkout/Checkout';
import {Route , Switch} from 'react-router-dom'
import Orders from './containers/Orders/Orders'

function App() {
  return (
      <Layout>
        <Switch>
          <Route path="/checkout" component={Checkout}/>
          <Route path="/orders" component={Orders}/>
          <Route path="/" exact component={BurgerBuilders}/>
        </Switch>
      </Layout>
  );
}

export default App;
