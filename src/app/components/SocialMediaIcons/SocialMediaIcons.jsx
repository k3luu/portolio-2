import React from 'react';
import ReactGA from 'react-ga';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedinIn,
  faGithub,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';
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
  color: #687c87;

  &.linkedin:hover {
    color: #0077b5;
  }
  &.git:hover {
    color: #767676;
  }
  &.ig:hover {
    color: #cd486b;
  }
  &.email:hover {
    color: #56b1bf;
  }
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
        <SocialLink title="LinkedIn" to={config.linkedIn}>
          <IconButton className="linkedin">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </IconButton>
        </SocialLink>
        <SocialLink title="Github" to={config.github}>
          <IconButton className="git">
            <FontAwesomeIcon icon={faGithub} />
          </IconButton>
        </SocialLink>
        <SocialLink title="Instagram" to={config.instagram}>
          <IconButton className="ig">
            <FontAwesomeIcon icon={faInstagram} />
          </IconButton>
        </SocialLink>
        <SocialLink title="Email" to={`mailto:${config.email}`}>
          <IconButton className="email">
            <FontAwesomeIcon icon={faEnvelope} />
          </IconButton>
        </SocialLink>
      </Container>
    );
  }
}

export default SocialMediaIcons;
