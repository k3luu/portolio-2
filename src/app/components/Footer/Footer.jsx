import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const FooterBar = styled.div`
  background: #f6f9fd;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  width: 100%;
  padding: 20px;
  position: absolute;
  bottom: 0;

  ${breakpoint('sm')`
    padding: 0 50px;  
  `};
`;

class Footer extends React.Component {
  render() {
    return <FooterBar>© Kathy Luu 2018</FooterBar>;
  }
}

export default Footer;
