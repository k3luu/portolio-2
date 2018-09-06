import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import 'whatwg-fetch';
import 'babel-polyfill';
import ReactGA from 'react-ga';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
/*eslint-disable*/
// import _ from 'lodash';
import Styles from './app/assets/scss/style.scss';
/*eslint-enable*/
import config from './app/SiteConfig';
// Reducers
import { mainState } from './app/components/appReducers';

// Components
import AppIndex from './app/components/appIndex';
import Success from './app/components/Success/Success';

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

const appStore = createStore(combineReducers({ mainState }));

if (NODE_ENV === 'production') {
  ReactGA.initialize(config.gaProd);
} else {
  ReactGA.initialize(config.gaDev);
}

ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
  <ThemeProvider theme={breakPointsTheme}>
      <Provider store={appStore}>
        <BrowserRouter>
          <Switch>
            <Route path="/success" component={Success} name="Success" />
            <Route path="/" component={AppIndex} name="AppIndex" />
          </Switch>
        </BrowserRouter>
      </Provider>
  </ThemeProvider>,
  document.getElementById('app')
);
