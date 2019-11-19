import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Product from './pages/Product';
import Restaurants from './pages/Restaurants';


export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/cart" component={Cart} />
      <Route path="/product" component={Product} />
      <Route path="/restaurants" component={Restaurants} />

    </Switch>
  )
}