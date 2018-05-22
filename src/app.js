import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';
import 'babel-polyfill';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
// import { Provider } from 'react-redux';
// import { combineReducers, createStore, applyMiddleware, compose } from 'redux';

//components
import AppIndex from './app/components/appIndex';
import { MyTheme } from './app/components/MUI/MyTheme';

ReactDOM.render(
  <MuiThemeProvider theme={MyTheme}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={AppIndex} />
      </Switch>
    </BrowserRouter>
  </MuiThemeProvider>,
  document.getElementById('app')
);
