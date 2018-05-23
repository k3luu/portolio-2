/*eslint-disable*/
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faLinkedinIn from '@fortawesome/fontawesome-free-brands/faLinkedinIn';
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram';
import faEnvelope from '@fortawesome/fontawesome-free-regular/faEnvelope';

const Container = styled.div`
  display: table;
  line-height: 80px;
  list-style: none;
  margin: 0;
  padding: 0 10px;
`;

const SocialLink = props => <a target="_blank" rel="noopener noreferrer" {...props} />;

class SocialMediaIcons extends React.Component {
  render() {
    return (
      <Container>
        <IconButton component={SocialLink} href="https://www.linkedin.com/in/kathy-luu/">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </IconButton>
        <IconButton component={SocialLink} href="https://github.com/k3luu">
          <FontAwesomeIcon icon={faGithub} />
        </IconButton>
        <IconButton component={SocialLink} href="https://www.instagram.com/luusfilm/">
          <FontAwesomeIcon icon={faInstagram} />
        </IconButton>
        <IconButton component={SocialLink} href="mailto:kathyluu820@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </IconButton>
      </Container>
    );
  }
}

export default SocialMediaIcons;
