/*eslint-disable*/
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faEnvelope from '@fortawesome/fontawesome-free-regular/faEnvelope';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import config from '../../SiteConfig';
import SocialMediaIcons from '../SocialMediaIcons/SocialMediaIcons';
import Map from '../Map/Map';

const Container = styled.div``;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  height: 300px;
  padding-bottom: 250px;

  ${breakpoint('sm')`
      flex-direction: row;  
  `};
`;

const Info = styled.div`
  font-size: 14px;
  border: 0;
  margin: 0;
  width: 100%;
  padding-bottom: 25px;

  ${breakpoint('sm')`
    border-right: 1px solid #d0d3c5;
    min-width: 250px;
    width: 30%;
  `};
`;

const Note = styled.div`
  cursor: pointer;
  font-size: 10px;
  font-weight: bold;
  text-transform: uppercase;
  margin-left: 20px;
`;

const MailContainer = styled.div`
  display: none;

  ${breakpoint('sm')`
    display: block
  `};
`;

const SocialContainer = styled.div`
  display: block;

  ${breakpoint('sm')`
    display: none
  `};

  > div {
    justify-content: center;
  }
`;

const Form = styled.form`
  width: 100%;

  ${breakpoint('sm')`
      width: 500px;
      padding-left: 50px;  
  `};

  ${breakpoint('md')`
      width: 600px;  
  `};
`;

const TextBox = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 0 -10px;

  > div {
    margin: 0 10px;
  }
`;

const MessageBox = styled.div`
  margin: 20px -10px;
  display: flex;

  > div {
    margin: 0 10px;
    flex-grow: 1;
  }
`;

const validateEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

class Contact extends React.Component {
  state = {
    error: {
      name: false,
      email: false,
      message: false
    }
  };

  handleValidation = e => {
    const name = e.target.name;
    const value = e.target.value;
    const validationObj = Object.assign({}, this.state.error);

    if (name === 'email') {
      validationObj[name] = !validateEmail.test(value);
    } else if (value !== '') validationObj[name] = false;
    else validationObj[name] = true;

    this.setState({ error: validationObj });
  };

  render() {
    const { error } = this.state;

    return (
      <Container id="contact" className="body">
        <h2>Contact Me</h2>

        <Map />

        <Content>
          <Info>
            <h4 className="hp-mb30">Get in touch</h4>

            <SocialContainer>
              <SocialMediaIcons />
            </SocialContainer>

            <MailContainer>
              <a href={`mailto:${config.email}`}>
                <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: 16 }} /> {config.email}
              </a>
              <CopyToClipboard text={config.email}>
                <Note>(Copy address)</Note>
              </CopyToClipboard>
            </MailContainer>
          </Info>
          <Form name="contact" method="POST" action="/success" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <TextBox>
              <TextField
                name="name"
                label="Name"
                style={{ flexGrow: 1 }}
                error={error['name']}
                onChange={this.handleValidation}
                required
              />
              <TextField
                type="email"
                name="email"
                label="Email"
                style={{ flexGrow: 1 }}
                error={error['email']}
                onChange={this.handleValidation}
                required
              />
            </TextBox>
            <MessageBox>
              <TextField
                name="message"
                label="Message"
                multiline
                rows="4"
                fullWidth
                error={error['message']}
                onChange={this.handleValidation}
                required
              />
            </MessageBox>

            <Button type="submit" className="hp-mt50" variant="raised" color="secondary">
              Send
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default Contact;
