/*eslint-disable*/
import React from 'react';
import styled from 'styled-components';
import ReactRevealText from 'react-reveal-text';

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  padding: 0 30px;
`;

const Content = styled.div``;

const Name = styled.h1`
  color: #032b2f; // daintree
  font-size: 48px;
  letter-spacing: 8px;
  text-transform: uppercase;
`;

const Title = styled.h2`
  color: #032b2f; // daintree
  font-size: 30px;
  letter-spacing: 8px;
  text-transform: uppercase;
  opacity: 0.8;
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
      <Container id="home">
        <Content>
          <Name>
            <ReactRevealText show={this.state.show}>Kathy Luu</ReactRevealText>
          </Name>
          <Title>
            <ReactRevealText show={this.state.show}>Frontend Engineer</ReactRevealText>
          </Title>
        </Content>
      </Container>
    );
  }
}

export default Home;
