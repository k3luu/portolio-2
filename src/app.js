import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';
import 'babel-polyfill';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { combineReducers, createStore, applyMiddleware, compose } from 'redux';

//components
import AppIndex from './app/components/appIndex';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={AppIndex} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('app')
);
