import React from 'react';
import { withRouter } from 'react-router-dom';
import ReactGA from 'react-ga';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { faBriefcase, faHome } from '@fortawesome/free-solid-svg-icons';
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
  color: ${props => (props.active ? '#56b1bf' : '#6b6b6b')};
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  flex-grow: 1;
  justify-content: center;

  ${breakpoint('sm')`
    flex-grow: unset;
    font-size: 12px;
    padding: 0 40px;
  `};
`;

const Option = styled.div`
  display: none;

  ${breakpoint('sm')`
    display: block;
    flex-grow: 1;
  `};
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
   * @param value
   */
  handleChange = value => {
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
    const { value, options } = this.state;

    return (
      <Container>
        {_.map(options, p => (
          <Tab active={p.id === value} key={p.id} onClick={() => this.handleChange(p.id)}>
            <Option>{p.name}</Option>
            <FontAwesomeIcon className="nav__icon" icon={p.icon} />
          </Tab>
        ))}
      </Container>
    );
  }
}

export default withRouter(Navigation);
