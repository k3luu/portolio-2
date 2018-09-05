import React from 'react';
import { withRouter } from 'react-router-dom';
import ReactGA from 'react-ga';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { faBriefcase, faHome } from '@fortawesome/free-solid-svg-icons';
// import faHome from '@fortawesome/fontawesome-free-solid/faHome';
// import faBriefcase from '@fortawesome/fontawesome-free-solid/faBriefcase';
// import faUser from '@fortawesome/fontawesome-free-regular/faUser';
// import faPaperPlane from '@fortawesome/fontawesome-free-regular/faPaperPlane';
// import Tabs from '@material-ui/core/Tabs';
// import MyTab from '../MUI/MyTab';
import './styles/_navigation.scss';

const Container = styled.div`
  display: flex;
  width: 100%;

  ${breakpoint('sm')`
    width: auto;
  `};
`;

const Tab = styled.div`
  color: #56b1bf;
  display: flex;
  align-items: center;
  font-size: 12px;
  padding: 20px;
  text-transform: uppercase;
`;

class Navigation extends React.Component {
  state = {
    value: 0,
    options: [
      { id: 0, name: 'Home', to: 'home', icon: faHome },
      { id: 1, name: 'Projects', to: 'projects', icon: faBriefcase },
      { id: 2, name: 'About', to: 'about', icon: faUser },
      { id: 3, name: 'Contact', to: 'contact', icon: faPaperPlane }
    ]
  };

  /**
   * Sets the current navigation tab and moves the page to the selected
   * tab.
   *
   * @param event
   * @param value
   */
  handleChange = (event, value) => {
    const { options } = this.state;
    let match = '/';

    _.map(options, p => {
      if (p.id === value) match = p.to;
    });

    document.getElementById(match).scrollIntoView({ behavior: 'smooth', block: 'start' });
    ReactGA.event({
      category: 'Navigation',
      action: 'Clicked on a tab',
      label: match
    });

    this.setState({ value });
  };

  render() {
    const {
      // value,
      options
    } = this.state;

    return (
      <Container>
        {/*<Tabs value={value} textColor="primary" indicatorColor="primary" onChange={this.handleChange}>*/}
        {_.map(options, p => (
          <Tab key={p.id}>
            {p.name}
            <FontAwesomeIcon className="nav__icon" icon={p.icon} />
          </Tab>
        ))}
        {/*</Tabs>*/}
      </Container>
    );
  }
}

export default withRouter(Navigation);
