import React from 'react';
import ReactGA from 'react-ga';
import styled from 'styled-components';
// import breakpoint from 'styled-components-breakpoint';
import { withStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Collapse from '@material-ui/core/Collapse';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';
// import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';

// import { projectData } from './projectData';

/**
 * Google Analytics component to track external links
 * @param props
 * @returns {*}
 */
// const MyLink = props => (
//   <ReactGA.OutboundLink eventLabel={props.name} {...props} target="_blank" rel="noopener noreferrer" />
// );

const Container = styled.div``;

// const SingleCard = styled.div`
//   width: 100%;
//
//   ${breakpoint('sm')`
//     width: 50%
//   `};
// `;
//
// const CardContainer = styled.div`
//   display: flex;
//   flex-flow: column;
//   align-content: center;
//   height: auto;
//   margin: -15px;
//
//   ${breakpoint('sm')`
//     flex-flow: row wrap;
//   `};
// `;
//
// const ChipContainer = styled.div`
//   display: flex;
//   flex-flow: row wrap;
//   margin: 0 -5px;
// `;

const styles = theme => ({
  avatar: {
    border: '1px solid rgba(0, 0, 0, 0.14)'
  },
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
  },
  chipRoot: {
    fontSize: 14,
    margin: 5
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
    const { classes } = this.props;

    list.sort((a, b) => {
      let x, y;

      x = a.toLowerCase();
      y = b.toLowerCase();

      return x > y ? 1 : x < y ? -1 : 0;
    });

    return _.map(list, obj => {
      let src, href;

      switch (obj) {
        case 'React':
          href = 'https://reactjs.org/';
          src = 'https://s3-us-west-1.amazonaws.com/kaluu/portfolio/assets/react.png';
          break;

        case 'HTML':
          src = 'https://s3-us-west-1.amazonaws.com/kaluu/portfolio/assets/html.jpg';
          break;

        case 'Webpack':
          href = 'https://webpack.js.org/';
          src = 'https://s3-us-west-1.amazonaws.com/kaluu/portfolio/assets/webpack.jpg';
          break;

        case 'Gatsby':
          href = 'https://www.gatsbyjs.org/';
          src = 'https://s3-us-west-1.amazonaws.com/kaluu/portfolio/assets/gatsby.png';
          break;

        case 'styled-components':
          href = 'https://www.styled-components.com/';
          src = 'https://s3-us-west-1.amazonaws.com/kaluu/portfolio/assets/styledComponents.png';
          break;

        case 'Material UI':
          href = 'https://material-ui.com/';
          src = 'https://s3-us-west-1.amazonaws.com/kaluu/portfolio/assets/materialUI.png';
          break;

        case 'Gestalt':
          href = 'https://pinterest.github.io/gestalt/';
          src = 'https://s3-us-west-1.amazonaws.com/kaluu/portfolio/assets/pinterest.png';
          break;

        case 'Tumblr':
          href = 'https://www.tumblr.com/about';
          src = 'https://s3-us-west-1.amazonaws.com/kaluu/portfolio/assets/tumblr.png';
          break;

        case 'Disqus':
          href = 'https://disqus.com/';
          src = 'https://s3-us-west-1.amazonaws.com/kaluu/portfolio/assets/disqus.png';
          break;

        case 'GraphQL':
          href = 'https://graphql.org/';
          src = 'https://s3-us-west-1.amazonaws.com/kaluu/portfolio/assets/graphql.png';
          break;

        case 'Amazon Web Services':
          href = 'https://aws.amazon.com/?nc2=h_lg';
          src = 'https://s3-us-west-1.amazonaws.com/kaluu/portfolio/assets/aws.png';
          break;

        case 'PHP':
          src = 'https://s3-us-west-1.amazonaws.com/kaluu/portfolio/assets/php.png';
          break;

        case 'Google Maps API':
          href = 'https://cloud.google.com/maps-platform/';
          src = 'https://s3-us-west-1.amazonaws.com/kaluu/portfolio/assets/google.jpg';
          break;

        case 'CSS':
          src = 'https://s3-us-west-1.amazonaws.com/kaluu/portfolio/assets/css.png';
          break;

        case 'Netlify':
          href = 'https://www.netlify.com/';
          src = 'https://s3-us-west-1.amazonaws.com/kaluu/portfolio/assets/netlify.jpg';
          break;

        case 'Redux':
          href = 'https://redux.js.org/';
          src = 'https://s3-us-west-1.amazonaws.com/kaluu/portfolio/assets/redux.jpg';
          break;

        default:
      }

      return (
        <Chip
          key={obj}
          avatar={src && <Avatar src={src} className={classes.avatar} />}
          label={obj}
          className={classes.chipRoot}
          clickable={!!href}
          href={href}
          component="a"
          target="_blank"
        />
      );
    });
  };

  render() {
    // const { classes } = this.props;
    // const { cardsCollapsed } = this.state;

    return (
      <Container id="projects" className="body">
        <h2>Projects</h2>

        {/*<CardContainer>*/}
        {/*{projectData.map(p => (*/}
        {/*<SingleCard key={p.id}>*/}
        {/*<Card className={classes.card}>*/}
        {/*<CardMedia*/}
        {/*className={classes.media}*/}
        {/*image={p.image}*/}
        {/*title={p.alt_name}*/}
        {/*onClick={() => this.trackImageClick(p)}*/}
        {/*/>*/}

        {/*<CardContent>*/}
        {/*<h4>{p.name}</h4>*/}
        {/*{p.description}*/}
        {/*</CardContent>*/}

        {/*<CardActions className={classes.cardAction}>*/}
        {/*<div>*/}
        {/*<Button size="small" color="primary" onClick={() => this.trackExpandClick(p)}>*/}
        {/*{cardsCollapsed[p.id] ? 'Collapse' : 'Expand'}*/}
        {/*</Button>*/}
        {/*<Button size="small" component={MyLink} name={'Project - ' + p.name} to={p.href} color="primary">*/}
        {/*Visit*/}
        {/*</Button>*/}
        {/*</div>*/}

        {/*{p.github && (*/}
        {/*<IconButton component={MyLink} name={'Repo - ' + p.github} to={p.github}>*/}
        {/*<FontAwesomeIcon icon={faGithub} />*/}
        {/*</IconButton>*/}
        {/*)}*/}
        {/*</CardActions>*/}

        {/*<Collapse in={cardsCollapsed[p.id]} timeout="auto" unmountOnExit>*/}
        {/*<CardContent>*/}
        {/*<h5>Tools</h5>*/}
        {/*<ChipContainer>{this.renderTools(p.tools)}</ChipContainer>*/}
        {/*</CardContent>*/}
        {/*</Collapse>*/}
        {/*</Card>*/}
        {/*</SingleCard>*/}
        {/*))}*/}
        {/*</CardContainer>*/}
      </Container>
    );
  }
}

export default withStyles(styles)(Projects);
