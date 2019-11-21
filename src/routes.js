import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import FormData from './pages/FormData';
import Home from './pages/Home';
import Product from './pages/Product';
import Restaurants from './pages/Restaurants';
import ProductResume from './pages/ProductResume';
import FollowOrder from './pages/FollowOrder';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/form-data" component={FormData} />
      <Route path="/home" component={Home} />
      <Route path="/product" component={Product} />
      <Route path="/product-resume" component={ProductResume} />
      <Route path="/restaurants" component={Restaurants} />
      <Route path="/follow-order" component={FollowOrder} />
    </Switch>
  )
}