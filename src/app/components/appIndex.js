import React from 'react';
//import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Header from './Header/Header';
import Home from './Home/Home';
import About from './About/About';
import Experience from './Experience/Experience';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';

class AppIndex extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Route exact path="/" component={Home} name="Home" />
        <Route path="/projects" component={Projects} name="Projects" />
        <Route path="/experience" component={Experience} name="Experience" />
        <Route path="/about" component={About} name="About" />
        <Route path="/contact" component={Contact} name="Contact" />
      </div>
    );
  }
}

export default AppIndex;
