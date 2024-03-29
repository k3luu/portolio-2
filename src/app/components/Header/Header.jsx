import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Navigation from '../Navigation/Navigation';
import SocialMediaIcons from '../SocialMediaIcons/SocialMediaIcons';

const HeaderBar = styled.div`
  background: #fff;
  border-top: 4px solid #08708a;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
  display: flex;
  justify-content: space-between;
  height: 70px;
  width: 100%;
  position: fixed;
  top: 0;
  bottom: auto;
  z-index: 1100;
`;

const SocialContainer = styled.div`
  display: none;

  ${breakpoint('sm')`
    display: block
  `};
`;

/**
 * Contains the Navigation Tabs & Social Links components
 */
class Header extends React.Component {
  render() {
    return (
      <HeaderBar>
        <Navigation />

        <SocialContainer>
          <SocialMediaIcons />
        </SocialContainer>
      </HeaderBar>
    );
  }
}

export default Header;
