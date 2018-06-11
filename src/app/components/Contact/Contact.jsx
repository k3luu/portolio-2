import React from 'react';
import { connect } from 'react-redux';
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

const mapStateToProps = state => ({
  mainState: state.mainState
});

const Container = styled.div`
  min-height: ${props => (props.loading ? 0 : '')};
  height: ${props => (props.loading ? 0 : '')};
  padding: ${props => (props.loading ? 0 : '')};
`;

const Content = styled.div`
  display: ${props => (props.loading ? 'none' : 'flex')};
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

let validationObj = () => {
  return {
    dirty: false,
    valid: true
  };
};

const validateEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

class Contact extends React.Component {
  state = {
    error: {
      name: new validationObj(),
      email: new validationObj(),
      message: new validationObj()
    },
    submitValidation: false
  };

  /**
   * Iterates through the validation object and determines if form
   * is okay to submit
   *
   * @param validation  validation state object
   * @returns {boolean} True if form is valid; False if not
   */
  checkValidation = validation => {
    let valid = true;

    for (let key in validation) {
      if (validation[key].dirty) valid = validation[key].valid ? valid : false;
      else valid = false;
    }

    return valid;
  };

  /**
   * Updates the validation object as input changes
   *
   * @param e
   */
  handleValidation = e => {
    const name = e.target.name;
    const value = e.target.value;
    const validationObj = Object.assign({}, this.state.error);

    validationObj[name].dirty = true;

    if (name === 'email') {
      validationObj[name].valid = validateEmail.test(value);
    } else if (value === '') validationObj[name].valid = false;
    else validationObj[name].valid = true;

    this.setState({ error: validationObj, submitValidation: this.checkValidation(validationObj) });
  };

  render() {
    const { mainState } = this.props;
    const { error, submitValidation } = this.state;

    return (
      <Container id="contact" className="body" loading={mainState.loading}>
        {!mainState.loading && <h2>Contact Me</h2>}

        <Map />

        <Content loading={mainState.loading}>
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
                error={!error['name'].valid}
                onChange={this.handleValidation}
                required
              />
              <TextField
                type="email"
                name="email"
                label="Email"
                style={{ flexGrow: 1 }}
                error={!error['email'].valid}
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
                error={!error['message'].valid}
                onChange={this.handleValidation}
                required
              />
            </MessageBox>

            <Button type="submit" className="hp-mt50" variant="raised" color="secondary" disabled={!submitValidation}>
              Send
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default connect(mapStateToProps)(Contact);
