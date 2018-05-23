/*eslint-disable*/
import React from 'react';
import styled from 'styled-components';
import ReactRevealText from 'react-reveal-text';

const Name = styled.h1`
  font-size: 48px;
  text-transform: uppercase;
`;

class Home extends React.Component {
  constructor() {
    super();
    this.state = { show: false };
  }

  componentDidMount() {
    this.setState({ show: true });
  }

  render() {
    return (
      <div id="home" className="body">
        <Name>
          <ReactRevealText show={this.state.show}>Kathy Luu</ReactRevealText>
        </Name>
      </div>
    );
  }
}

export default Home;
