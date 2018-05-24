import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
// import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faEnvelope from '@fortawesome/fontawesome-free-regular/faEnvelope';

const Container = styled.div``;

const Form = styled.form`
  margin-top: 50px;
  width: 100%;

  ${breakpoint('sm')`
      width: 500px;  
  `};

  ${breakpoint('md')`
      width: 600px;  
  `};
`;

const TextBox = styled.div`
  display: flex;
`;

const MessageBox = styled.div`
  margin-top: 20px;
`;

class Contact extends React.Component {
  render() {
    return (
      <Container id="contact" className="body">
        <h2>Contact Me</h2>
        <p>Get in touch!</p>
        <FontAwesomeIcon icon={faEnvelope} /> kathyluu820@gmail.com
        <Form>
          <TextBox>
            <TextField id="name" label="Name" className="hp-mr20" style={{ flexGrow: 1 }} />
            <TextField id="email" label="Email" style={{ flexGrow: 1 }} />
          </TextBox>
          <MessageBox>
            <TextField id="message" label="Message" multiline rows="4" fullWidth />
          </MessageBox>
        </Form>
      </Container>
    );
  }
}

export default Contact;
