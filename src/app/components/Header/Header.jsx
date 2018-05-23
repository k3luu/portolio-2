import React from 'react';
import styled from 'styled-components';
import Navigation from '../Navigation/Navigation';
import SocialMediaIcons from '../SocialMediaIcons/SocialMediaIcons';

const Panel = styled.div`
  background: #f6f9fd;
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  position: fixed;
  top: 0;
`;

class Header extends React.Component {
  render() {
    return (
      <Panel>
        <Navigation />
        <SocialMediaIcons />
      </Panel>
    );
  }
}

export default Header;
