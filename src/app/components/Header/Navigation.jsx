import React from 'react';
import styled from 'styled-components';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const Container = styled.div`
  display: flex;
  flex-direction: columns;
  justify-content: flex-end;
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
        <Tabs value={value} onChange={this.handleChange}>
          <Tab label="Home" />
          <Tab label="Projects" />
          <Tab label="Experience" href="#basic-tabs" />
          <Tab label="About" />
        </Tabs>
      </Container>
    );
  }
}

export default Navigation;
