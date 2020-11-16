import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Home } from './components/Home';
import { Login } from './components/login';

export const App = (): JSX.Element => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
    </Switch>
  </BrowserRouter>
);
