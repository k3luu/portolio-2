import React from 'react';
import { withRouter } from 'react-router-dom';
import ReactGA from 'react-ga';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { faBriefcase, faHome } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  display: flex;
  width: 100%;

  ${breakpoint('sm')`
    width: auto;
  `};
`;

const Tab = styled.div`
  color: ${props => (props.active ? '#56b1bf' : '#687C87')};
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  flex-grow: 1;
  justify-content: center;
  transition: 0.2s;

  ${breakpoint('sm')`
    flex-grow: unset;
    font-size: 12px;
    padding: 0 40px;
  `};

  &:hover {
    color: #56b1bf;
  }
`;

const Option = styled.div`
  display: none;

  ${breakpoint('sm')`
    display: block;
    flex-grow: 1;
  `};
`;

const IconContainer = styled.div`
  display: block;

  ${breakpoint('sm')`
    display: none;
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

    options.map(p => {
      if (p.id === value) match = p.to;
    });

    document
      .getElementById(match)
      .scrollIntoView({ behavior: 'smooth', block: 'start' });
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
        {options.map(p => (
          <Tab
            active={p.id === value}
            key={p.id}
            onClick={() => this.handleChange(p.id)}
          >
            <Option>{p.name}</Option>
            <IconContainer>
              <FontAwesomeIcon className="nav__icon" icon={p.icon} />
            </IconContainer>
          </Tab>
        ))}
      </Container>
    );
  }
}

export default withRouter(Navigation);
