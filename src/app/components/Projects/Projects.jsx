import React from 'react';
import ReactGA from 'react-ga';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';
import { projectData } from './projectData';

/**
 * Google Analytics component to track external links
 * @param props
 * @returns {*}
 */
const MyLink = props => (
  <ReactGA.OutboundLink eventLabel={props.name} {...props} target="_blank" rel="noopener noreferrer" />
);

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
    minHeight: 460,
    margin: 15,
    position: 'relative',
    [theme.breakpoints.up('sm')]: {
      maxWidth: 400
    }
  },
  cardAction: {
    justifyContent: 'space-between'
  },
  media: {
    cursor: 'pointer',
    height: 100,
    boxShadow: '0 1px 1px 0 rgba(0, 0, 0, 0.14)',
    paddingTop: '40%'
  }
});

class Projects extends React.Component {
  state = { cardsCollapsed: {} };

  /**
   * Expands/collapses a project using its ID
   * @param project
   */
  handleCardCollapse = project => {
    const { cardsCollapsed } = this.state;

    cardsCollapsed[project.id] = !cardsCollapsed[project.id];

    if (cardsCollapsed[project.id]) {
      ReactGA.event({
        category: 'Projects',
        action: 'Expanded a project',
        label: project.name
      });
    }

    this.setState({ cardsCollapsed });
  };

  /**
   * Triggers project expansion via clicking on project image
   * @param project
   */
  trackImageClick = project => {
    const { cardsCollapsed } = this.state;

    if (!cardsCollapsed[project.id]) {
      ReactGA.event({
        category: 'Projects',
        action: 'Expanded a project via IMAGE',
        label: project.name
      });
    }

    this.handleCardCollapse(project);
  };

  /**
   * Triggers project expansion via 'Expand' button
   * @param project
   */
  trackExpandClick = project => {
    const { cardsCollapsed } = this.state;

    if (!cardsCollapsed[project.id]) {
      ReactGA.event({
        category: 'Projects',
        action: 'Expanded a project via BUTTON',
        label: project.name
      });
    }

    this.handleCardCollapse(project);
  };

  /**
   * Turns the array of tools for a project entry into a string to display
   *
   * @param list        array of tools
   * @returns {string}  string of tools, concat w/ ', '
   */
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
                  onClick={() => this.trackImageClick(p)}
                />

                <CardContent>
                  <h4>{p.name}</h4>
                  {p.description}
                </CardContent>

                <CardActions className={classes.cardAction}>
                  <div>
                    <Button size="small" color="primary" onClick={() => this.trackExpandClick(p)}>
                      {cardsCollapsed[p.id] ? 'Collapse' : 'Expand'}
                    </Button>
                    <Button size="small" component={MyLink} name={'Project - ' + p.name} to={p.href} color="primary">
                      Visit
                    </Button>
                  </div>

                  {p.github && (
                    <IconButton component={MyLink} name={'Repo - ' + p.github} to={p.github}>
                      <FontAwesomeIcon icon={faGithub} />
                    </IconButton>
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
