import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Couches from './components/Couches/Couches';

export default(
     <Switch>
    <Route path='/cool-couches' component={Couches} />
    <Route path='/' component={Home} />
    </Switch>
)
