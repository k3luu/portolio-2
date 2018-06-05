/*eslint-disable*/
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Header from './Header/Header';
import Home from './Home/Home';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import { stateOnChange, APP_ON_LOAD } from './appActions';

const mapStateToProps = state => ({
  mainState: state.mainState
});

const mapDispatchToProps = dispatch => ({
  stateOnChange: (type, data) => dispatch(stateOnChange(type, data))
});

const AppContainer = styled.div`
  position: relative;
  overflow: ${props => (props.loading ? 'hidden' : 'visible')};
`;

class AppIndex extends React.Component {
  componentDidMount() {
    setTimeout(() => this.props.stateOnChange(APP_ON_LOAD), 3000);
  }

  render() {
    console.log('appIndex', this.props);
    const { mainState } = this.props;

    return (
      <AppContainer loading={mainState.loading}>
        {!mainState.loading && <Header />}

        {mainState.loading ? (
          <div className="container">
            <ul>
              <li />
              <li />
              <li />
              <li />
              <li />
            </ul>
          </div>
        ) : (
          <Home />
        )}

        {/*<Home />*/}
        <div className={mainState.loading ? 'hp-hide' : ''}>
          <Projects />
          <About />
          <Contact />
          <Footer />
        </div>
      </AppContainer>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppIndex);
