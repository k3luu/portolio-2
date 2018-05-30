import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import ReactRevealText from 'react-reveal-text';

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  padding: 0 35px;
  max-width: 900px;
  margin: 0 auto;

  ${breakpoint('sm')`
    padding: 0 50px;  
  `};
`;

const Content = styled.div``;

const Name = styled.h1`
  color: #032b2f; // daintree
  font-size: 60px;
  line-height: 60px;
  letter-spacing: 8px;
  margin: 0;

  ${breakpoint('sm_er')`
    font-size: 70px;
    line-height: 70px;
  `};

  ${breakpoint('sm')`
    font-size: 80px;
    line-height: 80px;
  `};
`;

const Title = styled.h3`
  color: #032b2f; // daintree
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 8px;
  opacity: 0.8;

  ${breakpoint('sm')`
    font-size: 24px;
    line-height: 24px;
  `};
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
