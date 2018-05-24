import React from 'react';
import styled from 'styled-components';
//import { connect } from 'react-redux';
// import { Route } from 'react-router-dom';
import Header from './Header/Header';
import Home from './Home/Home';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

const AppContainer = styled.div`
  position: relative;
`;

class AppIndex extends React.Component {
  render() {
    return (
      <AppContainer>
        <Header />
        {/*<Route exact path="/" component={Home} name="Home" />*/}
        {/*<Route path="/projects" component={Projects} name="Projects" />*/}
        {/*<Route path="/about" component={About} name="About" />*/}
        {/*<Route path="/contact" component={Contact} name="Contact" />*/}
        <Home />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </AppContainer>
    );
  }
}

export default AppIndex;
