/*eslint-disable*/
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';

const Container = styled.div`
  display: table;
  line-height: 80px;
  list-style: none;
  margin: 0;
`;

const SocialLink = props => <a target="_blank" rel="noopener noreferrer" {...props} />;

class SocialMediaIcons extends React.Component {
  render() {
    return (
      <Container>
        <IconButton component={SocialLink} href="https://www.linkedin.com/in/kathy-luu/">
          <i className="fa fa-linkedin" />
        </IconButton>
        <IconButton component={SocialLink} href="https://github.com/k3luu">
          <i className="fa fa-github" />
        </IconButton>
        <IconButton component={SocialLink} href="https://www.instagram.com/luusfilm/">
          <i className="fa fa-instagram" />
        </IconButton>
        <IconButton component={SocialLink} href="mailto:kathyluu820@gmail.com">
          <i className="fa fa-envelope" />
        </IconButton>
      </Container>
    );
  }
}

export default SocialMediaIcons;
