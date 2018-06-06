/*eslint-disable*/
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import { projectData } from './projectData';

const MyLink = props => <a {...props} target="_blank" rel="noopener noreferrer" />;

const Container = styled.div``;

const SingleCard = styled.div`
  width: 100%;

  ${breakpoint('sm')`
    width: 50%  
  `};
`;

const CardContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-content: center;
  height: auto;
  margin: -15px;

  ${breakpoint('sm')`
    flex-flow: column wrap;
    height: 1200px;
  `};
`;

const styles = theme => ({
  card: {
    maxWidth: '100%',
    minHeight: 450,
    margin: 15,
    position: 'relative',
    [theme.breakpoints.up('sm')]: {
      maxWidth: 400
    }
  },
  media: {
    cursor: 'pointer',
    height: 100,
    borderBottom: '1px solid #56b1bf', // fountain-blue
    paddingTop: '40%'
  }
});

class Projects extends React.Component {
  state = { cardsCollapsed: {} };

  handleCardCollapse = id => {
    const { cardsCollapsed } = this.state;
    cardsCollapsed[id] = !cardsCollapsed[id];
    this.setState({ cardsCollapsed });
  };

  renderTools = list => {
    let toolStr = '';

    _.map(list, obj => {
      if (toolStr.length > 0) toolStr += ', ';
      toolStr += obj;
    });

    return toolStr;
  };

  render() {
    const { classes } = this.props;
    const { cardsCollapsed } = this.state;

    return (
      <Container id="projects" className="body">
        <h2>Projects</h2>

        <CardContainer>
          {projectData.map(p => (
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
                  {p.description}
                </CardContent>

                <CardActions>
                  <Button size="small" color="primary" onClick={() => this.handleCardCollapse(p.id)}>
                    {cardsCollapsed[p.id] ? 'Collapse' : 'Expand'}
                  </Button>
                  <Button size="small" component={MyLink} href={p.href} color="primary">
                    Visit
                  </Button>
                  {p.github && (
                    <Button size="small" component={MyLink} href={p.github} color="primary">
                      Github
                    </Button>
                  )}
                </CardActions>

                <Collapse in={cardsCollapsed[p.id]} timeout="auto" unmountOnExit>
                  <CardContent>
                    <h5>Tools</h5>
                    <div>{this.renderTools(p.tools)}</div>
                  </CardContent>
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
