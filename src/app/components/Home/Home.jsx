import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import ReactRevealText from 'react-reveal-text';

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  padding: 0 35px;
  margin: 0 auto;
  background-color: #f6f9fd;
  background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v20h2v2H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2z' fill='%2356b1bf' fill-opacity='0.12' fill-rule='evenodd'/%3E%3C/svg%3E");

  ${breakpoint('sm')`
    padding: 0 50px;  
  `};
`;

const Content = styled.div``;

const Name = styled.h1`
  color: #032b2f; // daintree
  font-size: 60px;
  line-height: 60px;
  letter-spacing: 7px;
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
  color: #032b2f;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 8px;
  opacity: 0.8;
  margin-left: 3px;

  ${breakpoint('sm')`
    font-size: 24px;
    line-height: 24px;
  `};
`;

class Home extends React.Component {
  state = { show: false };

  /**
   * Triggers the React Reveal Text transition
   */
  componentDidMount() {
    this.setState({ show: true });
  }

  render() {
    return (
      <Container id="home">
        <Content>
          <Name>
            <ReactRevealText show={!this.props.loading}>
              Kathy Luu
            </ReactRevealText>
          </Name>
          <Title>
            <ReactRevealText show={!this.props.loading}>
              Frontend Engineer
            </ReactRevealText>
          </Title>
        </Content>
      </Container>
    );
  }
}

export default Home;
