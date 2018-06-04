import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
// import { Route } from 'react-router-dom';
import Header from './Header/Header';
import Home from './Home/Home';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

const mapStateToProps = state => ({
  mainState: state.mainState
});

const AppContainer = styled.div`
  position: relative;
`;

class AppIndex extends React.Component {
  render() {
    console.log('appIndex', this.props);
    return (
      <AppContainer>
        <Header />

        <Home />
        <Projects />
        <About />
        <Contact />

        <Footer />
      </AppContainer>
    );
  }
}

export default connect(mapStateToProps)(AppIndex);
