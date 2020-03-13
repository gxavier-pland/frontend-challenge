import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import PlaceDetail from './pages/PlaceDetail';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/register" component={Register} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/place-detail/:place" component={PlaceDetail} />
    </Switch>
  );
}
