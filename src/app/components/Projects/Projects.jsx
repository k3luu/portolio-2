/*eslint-disable*/
import React from 'react';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import { projects } from './projects';
// images
import thh from './images/thh.png';
import luusfilm from './images/luusfilm.png';
import portfolio from './images/portfolio.png';

const Container = styled.div``;

const SingleCard = styled.div``;

const CardContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-content: center;
  height: 1200px;
`;

const styles = {
  card: {
    maxWidth: 400,
    width: 400,
    margin: 15
  },
  media: {
    cursor: 'pointer',
    height: 100,
    borderBottom: '1px solid #032b2f', // daintree
    paddingTop: '56.25%' // 16:9
  }
};

class Projects extends React.Component {
  state = { cardsCollapsed: {} };

  handleCardCollapse = id => {
    const { cardsCollapsed } = this.state;
    cardsCollapsed[id] = !cardsCollapsed[id];
    this.setState({ cardsCollapsed });
  };

  render() {
    const { classes } = this.props;
    const { cardsCollapsed } = this.state;

    return (
      <Container id="projects" className="body">
        <h2>Projects</h2>

        <CardContainer>
          {projects.map(p => (
            <SingleCard key={p.id}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image={p.image}
                  title={p.alt_name}
                  onClick={() => this.handleCardCollapse(p.id)}
                />
                <CardContent>
                  <h4>{p.name}</h4>
                </CardContent>
                <Collapse in={cardsCollapsed[p.id]} timeout="auto" unmountOnExit>
                  <CardContent>{p.description}</CardContent>
                </Collapse>
              </Card>
            </SingleCard>
          ))}
        </CardContainer>
      </Container>
    );
  }
}

export default withStyles(styles)(Projects);
