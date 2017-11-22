import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';
import 'babel-polyfill';
// import { Router, Route, hashHistory } from 'react-router';
// import { Provider } from 'react-redux';
// import { combineReducers, createStore, applyMiddleware, compose } from 'redux';

//components
import AppIndex from './app/components/appIndex';

ReactDOM.render(
    <AppIndex/>,
    document.getElementById('app')
);
