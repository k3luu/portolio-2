import React from 'react';
//import { connect } from 'react-redux';
import Header from './Header/Header';
/*eslint-disable*/
import Styles from '../assets/scss/style.scss';
/*eslint-enable*/

class AppIndex extends React.Component {
  render() {
    return (
      <div className="body">
        <Header />
        <div>Hello World</div>
      </div>
    );
  }
}

export default AppIndex;
