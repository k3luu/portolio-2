import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
`;

const Ul = styled.ul`
  display: flex;
  padding: 0;
`;

const Li = styled.li`
  width: 20px;
  height: 20px;
  margin: 10px;
  list-style-type: none;
  transition: 0.5s all ease;
`;

class MainLoader extends React.Component {
  render() {
    return (
      <Container>
        <Ul id="loader">
          <Li />
          <Li />
          <Li />
          <Li />
          <Li />
        </Ul>
      </Container>
    );
  }
}

export default MainLoader;
