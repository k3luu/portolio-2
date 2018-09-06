import React from 'react';
import ReactGA from 'react-ga';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Collapse from '@material-ui/core/Collapse';
import Chip from '@material-ui/core/Chip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { projectData } from './projectData';

/**
 * Google Analytics component to track external links
 * @param props
 * @returns {*}
 */
const MyLink = props => (
  <ReactGA.OutboundLink
    eventLabel={props.name}
    {...props}
    target="_blank"
    rel="noopener noreferrer"
  />
);

const Container = styled.div``;

const SingleCard = styled.div`
  width: 100%;

  ${breakpoint('sm')`
    width: 50%
  `};
`;

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

const Card = styled.div``;

const CardMedia = styled.img`
  width: 100%;
`;

const CardContent = styled.div``;

const CardActions = styled.div``;

const ChipContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 0 -5px;
`;

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
    list.sort((a, b) => {
      let x, y;

      x = a.toLowerCase();
      y = b.toLowerCase();

      return x > y ? 1 : x < y ? -1 : 0;
    });

    return list.map(obj => {
      let src, href;

      switch (obj) {
        case 'React':
          href = 'https://reactjs.org/';
          src =
            'https://s3-us-west-1.amazonaws.com/kaluu/portfolio/assets/react.png';
          break;

        case 'HTML':
          src =
            'https://s3-us-west-1.amazonaws.com/kaluu/portfolio/assets/html.jpg';
          break;

        case 'Webpack':
          href = 'https://webpack.js.org/';
          src =
            'https://s3-us-west-1.amazonaws.com/kaluu/portfolio/assets/webpack.jpg';
          break;

        case 'Gatsby':
          href = 'https://www.gatsbyjs.org/';
          src =
            'https://s3-us-west-1.amazonaws.com/kaluu/portfolio/assets/gatsby.png';
          break;

        case 'styled-components':
          href = 'https://www.styled-components.com/';
          src =
            'https://s3-us-west-1.amazonaws.com/kaluu/portfolio/assets/styledComponents.png';
          break;

        case 'Material UI':
          href = 'https://material-ui.com/';
          src =
            'https://s3-us-west-1.amazonaws.com/kaluu/portfolio/assets/materialUI.png';
          break;

        case 'Gestalt':
          href = 'https://pinterest.github.io/gestalt/';
          src =
            'https://s3-us-west-1.amazonaws.com/kaluu/portfolio/assets/pinterest.png';
          break;

        case 'Tumblr':
          href = 'https://www.tumblr.com/about';
          src =
            'https://s3-us-west-1.amazonaws.com/kaluu/portfolio/assets/tumblr.png';
          break;

        case 'Disqus':
          href = 'https://disqus.com/';
          src =
            'https://s3-us-west-1.amazonaws.com/kaluu/portfolio/assets/disqus.png';
          break;

        case 'GraphQL':
          href = 'https://graphql.org/';
          src =
            'https://s3-us-west-1.amazonaws.com/kaluu/portfolio/assets/graphql.png';
          break;

        case 'Amazon Web Services':
          href = 'https://aws.amazon.com/?nc2=h_lg';
          src =
            'https://s3-us-west-1.amazonaws.com/kaluu/portfolio/assets/aws.png';
          break;

        case 'PHP':
          src =
            'https://s3-us-west-1.amazonaws.com/kaluu/portfolio/assets/php.png';
          break;

        case 'Google Maps API':
          href = 'https://cloud.google.com/maps-platform/';
          src =
            'https://s3-us-west-1.amazonaws.com/kaluu/portfolio/assets/google.jpg';
          break;

        case 'CSS':
          src =
            'https://s3-us-west-1.amazonaws.com/kaluu/portfolio/assets/css.png';
          break;

        case 'Netlify':
          href = 'https://www.netlify.com/';
          src =
            'https://s3-us-west-1.amazonaws.com/kaluu/portfolio/assets/netlify.jpg';
          break;

        case 'Redux':
          href = 'https://redux.js.org/';
          src =
            'https://s3-us-west-1.amazonaws.com/kaluu/portfolio/assets/redux.jpg';
          break;

        default:
      }
      console.log('src', src);

      return (
        <Chip
          key={obj}
          label={obj}
          clickable={!!href}
          href={href}
          component="a"
          target="_blank"
        />
      );
    });
  };

  render() {
    const { cardsCollapsed } = this.state;

    return (
      <Container id="projects" className="body">
        <h2>Projects</h2>

        {projectData.map(p => (
          <SingleCard key={p.id}>
            <Card>
              <CardMedia
                src={p.image}
                alt={p.alt_name}
                title={p.alt_name}
                onClick={() => this.trackImageClick(p)}
              />

              <CardContent>
                <h4>{p.name}</h4>
                {p.description}
              </CardContent>

              <CardActions>
                <div>
                  <button onClick={() => this.trackExpandClick(p)}>
                    {cardsCollapsed[p.id] ? 'Collapse' : 'Expand'}
                  </button>
                  <MyLink name={'Project - ' + p.name} href={p.href}>
                    <button>Visit</button>
                  </MyLink>
                </div>

                {p.github && (
                  <MyLink name={'Repo - ' + p.github} href={p.github}>
                    <FontAwesomeIcon icon={faGithub} />
                  </MyLink>
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
      </Container>
    );
  }
}

export default Projects;
