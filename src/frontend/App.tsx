import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Home } from './components/Home';
import { Login } from './components/login';

export const App = () => (
    <BrowserRouter>
        <Switch>
            <div className='bg-gray-100 text-gray-900 font-sans antialiased'>
                <Route exact path='/' component={Home} />
                <Route exact path='/login' component={Login} />
            </div>
        </Switch>
    </BrowserRouter>
);
