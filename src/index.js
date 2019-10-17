import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import App from './App';
import Favorites from './pages/favorites/Index'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path='/' exact={true} component={App} />
            <Route path='/favorites/' exact={true} component={Favorites} />
        </Switch>
    </BrowserRouter>, document.getElementById('root'));