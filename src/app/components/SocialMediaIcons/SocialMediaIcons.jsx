import React from 'react';
import ReactGA from 'react-ga';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faLinkedinIn from '@fortawesome/fontawesome-free-brands/faLinkedinIn';
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram';
import faEnvelope from '@fortawesome/fontawesome-free-regular/faEnvelope';
import config from '../../SiteConfig';

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 10px;
`;

const SocialLink = props => (
  <ReactGA.OutboundLink eventLabel={'Social Link - ' + props.to} target="_blank" rel="noopener noreferrer" {...props} />
);

class SocialMediaIcons extends React.Component {
  render() {
    return (
      <Container>
        <IconButton component={SocialLink} to={config.linkedIn}>
          <FontAwesomeIcon icon={faLinkedinIn} />
        </IconButton>
        <IconButton component={SocialLink} to={config.github}>
          <FontAwesomeIcon icon={faGithub} />
        </IconButton>
        <IconButton component={SocialLink} to={config.instagram}>
          <FontAwesomeIcon icon={faInstagram} />
        </IconButton>
        <IconButton component={SocialLink} to={`mailto:${config.email}`}>
          <FontAwesomeIcon icon={faEnvelope} />
        </IconButton>
      </Container>
    );
  }
}

export default SocialMediaIcons;
