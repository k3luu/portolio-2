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
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
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
    height: 1400px;
  `};
`;

const ChipContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
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
    let toolChips = [];

    _.map(list, obj => {
      let src;

      switch (obj) {
        case 'React':
          src = 'https://laracasts.com/images/series/circles/do-you-react.png';
          break;

        case 'Javascript':
          src = 'https://www.bleepstatic.com/content/hl-images/2017/03/09/JavaScript.jpg';
          break;

        case 'HTML':
          src = 'https://www.sololearn.com/Icons/Courses/1014.png';
          break;

        case 'styled-components':
          src = 'http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-11/256/nail-polish.png';
          break;

        case 'SASS':
          src = 'https://sass-lang.com/assets/img/styleguide/seal-color-aef0354c.png';
          break;

        case 'Webpack':
          src =
            'https://cdn-images.threadless.com/threadless-media/artist_shops/shops/webpack/products/153396/shirt-1484585688-8a896a82dfa5bc337a0ea76ded65424f.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltIiwgW2ZhbHNlLCBmYWxzZV0sIHt9XSwgWyJyZXNpemUiLCBbXSwgeyJ3aWR0aCI6IDk5Ni4wLCAiYWxsb3dfdXAiOiBmYWxzZSwgImhlaWdodCI6IDk5Ni4wfV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzEyMDAsIDEyMDBdLCB7ImJhY2tncm91bmQiOiAiMWM3OGMwIn1dLCBbInJlc2l6ZSIsIFs4MDBdLCB7fV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzgwMCwgODAwLCAiI2ZmZmZmZiJdLCB7fV0sIFsiZW5jb2RlIiwgWyJqcGciLCA4NV0sIHt9XV19';
          break;

        default:
      }

      toolChips.push(<Chip key={obj} avatar={src && <Avatar src={src} />} label={obj} className={classes.chipRoot} />);
    });

    return toolChips;
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
                    <ChipContainer>{this.renderTools(p.tools)}</ChipContainer>
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
