import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
// import MainLoader from './Loader/MainLoader';
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
  /**
   * Lets the other components (namely Google Maps) load first
   */
  componentDidMount() {
    setTimeout(() => this.props.stateOnChange(APP_ON_LOAD), 100);
  }

  /**
   * Determines which components to render. MainLoader overtakes
   * everything when visible.
   *
   * @param type
   * @returns {*}
   */
  renderComponent(type) {
    const { mainState } = this.props;

    switch (type) {
      // case 'loader':
      //   return mainState.loading && <MainLoader />;
      case 'header':
        return <Header />;
      case 'home':
        return <Home loading={mainState.loading} />;
      case 'projectData':
        return !mainState.loading && <Projects />;
      case 'about':
        return !mainState.loading && <About />;
      case 'contact':
        return !mainState.loading && <Contact />;
      case 'footer':
        return !mainState.loading && <Footer />;
    }
  }

  render() {
    const { mainState } = this.props;

    return (
      <AppContainer loading={mainState.loading}>
        {/*{this.renderComponent('loader')}*/}
        {this.renderComponent('header')}
        {this.renderComponent('home')}
        {this.renderComponent('projectData')}
        {this.renderComponent('about')}
        {this.renderComponent('contact')}
        {this.renderComponent('footer')}
      </AppContainer>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppIndex);
