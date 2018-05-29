import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Navigation from '../Navigation/Navigation';
import SocialMediaIcons from '../SocialMediaIcons/SocialMediaIcons';

const HeaderBar = styled.div`
  background: #f6f9fd;
  display: flex;
  justify-content: space-between;
  height: 70px;
  width: 100%;
  position: fixed;
  top: auto;
  bottom: 0;
  z-index: 1100;

  ${breakpoint('sm')`
    top: 0;
    bottom: auto;
  `};
`;

const SocialContainer = styled.div`
  display: none;

  ${breakpoint('sm')`
    display: block
  `};
`;

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
