import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div``;

class Footer extends React.Component {
  render() {
    return (
      <Container id="success" className="body">
        <Link to="/">Back</Link>
        <div>Success!</div>
      </Container>
    );
  }
}

export default Footer;
