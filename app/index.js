import './main.css';
import 'babel-polyfill';
import config from '../config.json';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import createHashHistory from 'history/lib/createHashHistory';

import MainPage from './page/MainPage.js';

const history = config.environment === 'production' ? createBrowserHistory() : createHashHistory();
window.React = React;

const Routes = (
    <Router history={history}>
        <Route path="/" component={MainPage} />
    </Router>
);


(function main() {
    const app = document.createElement('div');
    document.body.appendChild(app);
    ReactDOM.render(Routes, app);
})();
