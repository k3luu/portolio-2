import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import config from '../../SiteConfig';
import SocialMediaIcons from '../SocialMediaIcons/SocialMediaIcons';
// import Map from '../Map/Map';

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
  text-transform: uppercase;
  margin-left: 25px;
  letter-spacing: 0.5px;
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
      padding-left: 40px;  
  `};

  ${breakpoint('md')`
      width: 600px;  
  `};
`;

const TextSection = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 0 -10px;
`;

const TextBox = styled.div`
  flex-grow: 1;
  margin: 10px;
  position: relative;
  height: 70px;
`;

const TextLabel = styled.label`
  color: ${props => (props.active ? '#08708a' : '#032b2f')};
  font-size: ${props => (props.active ? '8px' : '12px')};
  letter-spacing: 0.6px;
  text-transform: uppercase;
  transition: 0.2s;
  position: absolute;
  bottom: ${props => (props.active ? '65px' : '35px')};
`;

const TextField = styled.input`
  border: 0;
  border-bottom: ${props =>
    props.error ? '2px solid red' : '1px solid #032b2f'};
  font-size: 14px;
  box-sizing: border-box;
  padding: 10px 1px;
  width: 100%;
  transition: 0.2s;

  &:focus {
    border-bottom: 2px solid #08708a;
    outline: 0;
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

const Button = styled.button`
  color: ${props => (props.disabled ? 'rgba(0, 0, 0, 0.26)' : '#fff')};
  background: ${props => (props.disabled ? 'rgba(0, 0, 0, 0.12)' : '#032b2f')};
  border: 0;
  border-radius: 2px;
  margin-top: 50px;
  padding: 10px 20px;
  font-weight: bold;
  text-transform: uppercase;
  transition: 0.2s ease;
`;

let validationObj = () => {
  return {
    dirty: false,
    valid: true,
    focus: false,
    value: null
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

  onFocus = e => {
    const name = e.target.name;
    const validationObj = Object.assign({}, this.state.error);

    validationObj[name].focus = true;

    this.setState({
      error: validationObj
    });
  };

  onBlur = e => {
    const name = e.target.name;
    const validationObj = Object.assign({}, this.state.error);

    validationObj[name].focus = false;

    this.setState({
      error: validationObj
    });
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
    validationObj[name].value = value === '' ? null : value;

    if (name === 'email') validationObj[name].valid = validateEmail.test(value);
    else validationObj[name].valid = value !== '';

    this.setState({
      error: validationObj,
      submitValidation: this.checkValidation(validationObj)
    });
  };

  render() {
    const { mainState } = this.props;
    const { error, submitValidation } = this.state;

    return (
      <Container id="contact" className="body" loading={mainState.loading}>
        {!mainState.loading && <h2>Contact Me</h2>}

        {/*<Map />*/}

        <Content loading={mainState.loading}>
          <Info>
            <SocialContainer>
              <SocialMediaIcons />
            </SocialContainer>

            <MailContainer>
              <a href={`mailto:${config.email}`}>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ fontSize: 16, marginRight: 5 }}
                />{' '}
                {config.email}
              </a>
              <CopyToClipboard text={config.email}>
                <Note>(Copy address)</Note>
              </CopyToClipboard>
            </MailContainer>
          </Info>

          <Form
            name="contact"
            method="POST"
            action="/success"
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="contact" />
            <TextSection>
              <TextBox>
                <TextLabel
                  htmlFor="name"
                  active={error['name'].focus || !!error['name'].value}
                >
                  Name
                </TextLabel>
                <TextField
                  id="name"
                  name="name"
                  type="text"
                  onChange={this.handleValidation}
                  error={!error['name'].valid}
                  onFocus={this.onFocus}
                  onBlur={this.onBlur}
                />
              </TextBox>
              <TextBox>
                <TextLabel
                  htmlFor="email"
                  active={error['email'].focus || !!error['email'].value}
                >
                  Email
                </TextLabel>
                <TextField
                  id="email"
                  name="email"
                  type="email"
                  onChange={this.handleValidation}
                  error={!error['email'].valid}
                  onFocus={this.onFocus}
                  onBlur={this.onBlur}
                />
              </TextBox>
            </TextSection>
            <MessageBox>
              <TextBox>
                <TextLabel
                  htmlFor="message"
                  active={error['message'].focus || !!error['message'].value}
                >
                  Message
                </TextLabel>
                <TextField
                  id="message"
                  name="message"
                  label="Message"
                  error={!error['message'].valid}
                  onChange={this.handleValidation}
                  onFocus={this.onFocus}
                  onBlur={this.onBlur}
                />
              </TextBox>
            </MessageBox>

            <Button type="submit" disabled={!submitValidation}>
              Send
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default connect(mapStateToProps)(Contact);
