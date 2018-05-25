/*eslint-disable*/
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faEnvelope from '@fortawesome/fontawesome-free-regular/faEnvelope';
import faLinkedinIn from '@fortawesome/fontawesome-free-brands/faLinkedinIn';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import config from '../../SiteConfig';
import SocialMediaIcons from '../SocialMediaIcons/SocialMediaIcons';

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

const SocialLink = props => <a target="_blank" rel="noopener noreferrer" {...props} />;

class Contact extends React.Component {
  render() {
    return (
      <Container id="contact" className="body">
        <h2>Contact Me</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d203131.14141825392!2d-121.95749543746112!3d37.29693300460036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcae48af93ff5%3A0xb99d8c0aca9f717b!2sSan+Jose%2C+CA!5e0!3m2!1sen!2sus!4v1527199098723"
          width="100%"
          height="300"
          frameBorder="0"
          allowFullScreen
        />

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
              {/*<a href={`mailto:${config.linkedIn}`}>*/}
              {/*<FontAwesomeIcon icon={faLinkedinIn} style={{ color: '#0077B5', fontSize: 16, marginTop: 10 }} /> View my*/}
              {/*LinkedIn profile*/}
              {/*</a>*/}
            </MailContainer>
          </Info>
          <Form>
            <TextBox>
              <TextField id="name" label="Name" style={{ flexGrow: 1 }} />
              <TextField id="email" label="Email" style={{ flexGrow: 1 }} />
            </TextBox>
            <MessageBox>
              <TextField id="message" label="Message" multiline rows="4" fullWidth />
            </MessageBox>

            <Button className="hp-mt50" variant="raised" color="secondary">
              Send
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default Contact;
