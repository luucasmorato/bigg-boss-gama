import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import FormData from './pages/FormData';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Product from './pages/Product';
import Restaurants from './pages/Restaurants';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/form-data" component={FormData} />
      <Route path="/home" component={Home} />
      <Route path="/cart" component={Cart} />
      <Route path="/product" component={Product} />
      <Route path="/restaurants" component={Restaurants} />
    </Switch>
  )
}