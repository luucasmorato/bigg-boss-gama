import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';

export default function Routes() {

    return(
        <Switch>
            <Route exact patch='/' component={Login}/> 
            <Route patch='/home' component={Home}/> 
        </Switch>
    )
}