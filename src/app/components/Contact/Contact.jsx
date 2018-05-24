import React from 'react';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faEnvelope from '@fortawesome/fontawesome-free-regular/faEnvelope';

const Container = styled.div``;

class Contact extends React.Component {
  render() {
    return (
      <Container id="contact" className="body">
        <h2>Contact Me</h2>
        <p>Get in touch</p>
        <FontAwesomeIcon icon={faEnvelope} /> kathyluu820@gmail.com
      </Container>
    );
  }
}

export default Contact;
