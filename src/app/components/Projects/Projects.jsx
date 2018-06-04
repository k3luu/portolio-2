/*eslint-disable*/
import React from 'react';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
// images
import thh from './images/thh.png';
import luusfilm from './images/luusfilm.png';
import portfolio from './images/portfolio.png';

const Container = styled.div``;

const CardContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const styles = {
  card: {
    maxWidth: 400,
    width: 400,
    margin: 10
  },
  media: {
    cursor: 'pointer',
    height: 100,
    borderBottom: '1px solid #032b2f', // daintree
    paddingTop: '56.25%' // 16:9
  }
};

class Projects extends React.Component {
  state = { expanded: false };

  render() {
    const { classes } = this.props;

    return (
      <Container id="projects" className="body">
        <h2>Projects</h2>

        <CardContainer>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={thh}
              title="THH Header"
              onClick={() => this.setState({ expanded: !this.state.expanded })}
            />
            <CardContent>
              <h4>Two Half-Hitches</h4>
              <div>Blog</div>
            </CardContent>
            <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
              <CardContent>Some Informationnnnn</CardContent>
            </Collapse>
          </Card>

          <Card className={classes.card}>
            <CardMedia className={classes.media} image={luusfilm} title="Luusfilm Header" />
            <CardContent>
              <h4>Luusfilm</h4>
              <div>Blog</div>
            </CardContent>
          </Card>

          <Card className={classes.card}>
            <CardMedia className={classes.media} image={portfolio} title="Portfolio Header" />
            <CardContent>
              <h4>Portfolio</h4>
            </CardContent>
          </Card>
        </CardContainer>
      </Container>
    );
  }
}

export default withStyles(styles)(Projects);
