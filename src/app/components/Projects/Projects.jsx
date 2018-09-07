import React from 'react';
import ReactGA from 'react-ga';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
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
  margin: 50px 0;

  ${breakpoint('sm')`
    width: 50%;
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

const CardMedia = styled.img`
  width: 100%;
`;

const CardActions = styled.div``;

const ChipContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const Chip = styled.div`
  color: rgba(0, 0, 0, 0.87);
  border: none;
  height: 32px;
  cursor: default;
  padding: 0 10px;
  margin: 5px;
  display: inline-flex;
  outline: 0;
  font-size: 0.8125rem;
  white-space: nowrap;
  align-items: center;
  border-radius: 16px;
  text-decoration: none;
  justify-content: center;
  background-color: #e0e0e0;
`;

const Button = styled.button`
  color: ${props => (props.disabled ? 'rgba(0, 0, 0, 0.26)' : '#fff')};
  background: ${props => (props.disabled ? 'rgba(0, 0, 0, 0.12)' : '#032b2f')};
  border: 0;
  border-radius: 2px;
  margin-top: 30px;
  margin-right: 10px;
  padding: 5px 10px;
  font-weight: bold;
  text-transform: uppercase;
  transition: 0.2s ease;
  cursor: pointer;
`;

class Projects extends React.Component {
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
      console.log('src', src, href);

      return (
        <Chip key={obj} clickable={!!href}>
          {obj}
        </Chip>
      );
    });
  };

  render() {
    return (
      <Container id="projects" className="body">
        <h2>Projects</h2>

        {projectData.map(p => (
          <SingleCard key={p.id}>
            <CardMedia src={p.image} alt={p.alt_name} title={p.alt_name} />

            <h4>{p.name}</h4>
            {p.description}

            <CardActions>
              <MyLink title={p.name} name={'Project - ' + p.name} to={p.href}>
                <Button>Visit</Button>
              </MyLink>

              {p.github && (
                <MyLink
                  title={`${p.name}- Github`}
                  name={'Repo - ' + p.name}
                  to={p.github}
                >
                  <FontAwesomeIcon icon={faGithub} />
                </MyLink>
              )}
            </CardActions>

            <h5>Tools</h5>
            <ChipContainer>{this.renderTools(p.tools)}</ChipContainer>
          </SingleCard>
        ))}
      </Container>
    );
  }
}

export default Projects;
