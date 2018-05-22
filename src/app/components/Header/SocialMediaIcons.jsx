import React from 'react';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';

const Container = styled.div`
  display: table;
  line-height: 80px;
  list-style: none;
  margin: 0;
`;

class SocialMediaIcons extends React.Component {
  render() {
    return (
      <Container>
        <IconButton>
          <i className="fa fa-linkedin" />
        </IconButton>
        <IconButton>
          <i className="fa fa-github" />
        </IconButton>
        <IconButton>
          <i className="fa fa-instagram" />
        </IconButton>
        <IconButton>
          <i className="fa fa-envelope" />
        </IconButton>
      </Container>
    );
  }
}

export default SocialMediaIcons;
