import React from 'react';
import ReactGA from 'react-ga';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import config from '../../SiteConfig';

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 10px;
`;

const IconButton = styled.div`
  padding: 10px;
  font-size: 20px;
  color: #032b2f;
`;

/**
 * Google Analytics component to track external links
 * @param props
 * @returns {*}
 */
const SocialLink = props => (
  <ReactGA.OutboundLink
    href={props.to}
    eventLabel={'Social Link - ' + props.to}
    target="_blank"
    rel="noopener noreferrer"
    {...props}
  />
);

class SocialMediaIcons extends React.Component {
  render() {
    return (
      <Container>
        <SocialLink to={config.linkedIn}>
          <IconButton>
            <FontAwesomeIcon icon={faLinkedinIn} />
          </IconButton>
        </SocialLink>
        <SocialLink to={config.github}>
          <IconButton>
            <FontAwesomeIcon icon={faGithub} />
          </IconButton>
        </SocialLink>
        <SocialLink to={config.instagram}>
          <IconButton>
            <FontAwesomeIcon icon={faInstagram} />
          </IconButton>
        </SocialLink>
        <SocialLink to={`mailto:${config.email}`}>
          <IconButton>
            <FontAwesomeIcon icon={faEnvelope} />
          </IconButton>
        </SocialLink>
      </Container>
    );
  }
}

export default SocialMediaIcons;
