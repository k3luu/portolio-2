import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';
import 'babel-polyfill';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';
/*eslint-disable*/
import _ from 'lodash';
import Styles from './app/assets/scss/style.scss';
/*eslint-enable*/
// import { Provider } from 'react-redux';
// import { combineReducers, createStore, applyMiddleware, compose } from 'redux';

//components
import AppIndex from './app/components/appIndex';
import Success from './app/components/Success/Success';
import { MyTheme } from './app/components/MUI/MyTheme';

const breakPointsTheme = {
  breakpoints: {
    xs: 0,
    sm_er: 350,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920
  }
};

ReactDOM.render(
  <ThemeProvider theme={breakPointsTheme}>
    <MuiThemeProvider theme={MyTheme}>
      <BrowserRouter>
        <Switch>
          <Route path="/success" component={Success} name="Success" />
          <Route path="/" component={AppIndex} name="AppIndex" />
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  </ThemeProvider>,
  document.getElementById('app')
);
