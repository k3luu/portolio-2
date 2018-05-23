import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Navigation from '../Navigation/Navigation';
import SocialMediaIcons from '../SocialMediaIcons/SocialMediaIcons';

const Panel = styled.div`
  background: #f6f9fd;
  display: flex;
  justify-content: space-between;
  height: 70px;
  width: 100%;
  position: fixed;
  top: 0;
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
      <Panel>
        <Navigation />

        <SocialContainer>
          <SocialMediaIcons />
        </SocialContainer>
      </Panel>
    );
  }
}

export default Header;
