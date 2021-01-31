import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Global, css } from '@emotion/react';
import { Editor } from './components/editor';
import { Home } from './components/Home';
import { Login } from './components/login';

export const App = (): JSX.Element => (
  <BrowserRouter>
    <Global styles={{ background: 'blue' }} />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/edit' component={Editor} />
    </Switch>
  </BrowserRouter>
);
