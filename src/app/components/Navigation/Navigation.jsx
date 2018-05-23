import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
import MyTab from '../MUI/MyTab';

const Container = styled.div`
  div {
    height: 100%;
  }
`;

class Navigation extends React.Component {
  state = {
    value: 0,
    options: [
      { id: 0, name: 'Home', to: '/' },
      { id: 1, name: 'Projects', to: '/projects' },
      { id: 2, name: 'Experience', to: '/experience' },
      { id: 3, name: 'About', to: '/about' },
      { id: 4, name: 'Contact', to: '/contact' }
    ]
  };

  handleChange = (event, value) => {
    const { options } = this.state;
    let match = '/';

    _.map(options, p => {
      if (p.id === value) match = p.to;
    });

    this.props.history.push(match);
    this.setState({ value });
  };

  render() {
    const { value, options } = this.state;

    return (
      <Container>
        <Tabs
          value={value}
          textColor="primary"
          indicatorColor="primary"
          style={{ height: '100%' }}
          onChange={this.handleChange}
        >
          {_.map(options, p => <MyTab key={p.id} label={p.name} />)}
        </Tabs>
      </Container>
    );
  }
}

export default withRouter(Navigation);
