import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import NotFound from './NotFound';
import Team from './Team';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App} />
            <Route path='/team/:teamId' component={Team}  />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Router;