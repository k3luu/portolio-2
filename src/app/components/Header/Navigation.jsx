import React from 'react';
import styled from 'styled-components';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const Container = styled.div`
  div {
    height: 100%;
  }
`;

class Navigation extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;

    return (
      <Container>
        <Tabs
          value={value}
          onChange={this.handleChange}
          classes={{
            root: {
              height: '100%'
            }
          }}
          style={{ height: '100%' }}
        >
          <Tab label="Home" disableRipple style={{ height: '100%' }} />
          <Tab label="Projects" disableRipple style={{ height: '100%' }} />
          <Tab label="Experience" disableRipple style={{ height: '100%' }} />
          <Tab label="About" disableRipple style={{ height: '100%' }} />
        </Tabs>
      </Container>
    );
  }
}

export default Navigation;
