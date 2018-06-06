/*eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const Container = styled.div``;

const ChipContainer = styled.div`
  max-width: 700px;
`;

const styles = () => ({
  root: {
    fontSize: 14,
    margin: 5
  }
});

class About extends React.Component {
  state = {
    skills: [
      {
        id: 0,
        name: 'React',
        src: 'https://laracasts.com/images/series/circles/do-you-react.png'
      },
      {
        id: 1,
        name: 'Javascript',
        src: 'https://www.bleepstatic.com/content/hl-images/2017/03/09/JavaScript.jpg'
      },
      { id: 2, name: 'HTML', src: 'https://www.sololearn.com/Icons/Courses/1014.png' },
      {
        id: 3,
        name: 'styled-components',
        src: 'http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-11/256/nail-polish.png'
      },
      {
        id: 4,
        name: 'SASS',
        src: 'https://sass-lang.com/assets/img/styleguide/seal-color-aef0354c.png'
      },
      {
        id: 5,
        name: 'Webpack',
        src:
          'https://cdn-images.threadless.com/threadless-media/artist_shops/shops/webpack/products/153396/shirt-1484585688-8a896a82dfa5bc337a0ea76ded65424f.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltIiwgW2ZhbHNlLCBmYWxzZV0sIHt9XSwgWyJyZXNpemUiLCBbXSwgeyJ3aWR0aCI6IDk5Ni4wLCAiYWxsb3dfdXAiOiBmYWxzZSwgImhlaWdodCI6IDk5Ni4wfV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzEyMDAsIDEyMDBdLCB7ImJhY2tncm91bmQiOiAiMWM3OGMwIn1dLCBbInJlc2l6ZSIsIFs4MDBdLCB7fV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzgwMCwgODAwLCAiI2ZmZmZmZiJdLCB7fV0sIFsiZW5jb2RlIiwgWyJqcGciLCA4NV0sIHt9XV19'
      },
      {
        id: 6,
        name: 'Github',
        src: 'https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png'
      },
      { id: 7, name: 'Node', src: 'https://pbs.twimg.com/profile_images/920915771202703361/hK0j4w6x_400x400.jpg' }
    ]
  };

  render() {
    const { skills } = this.state;

    return (
      <Container id="about" className="body">
        <h2>About Me</h2>

        <p>
          Currently working as a frontend engineer at Doctor.com, contributing to a complete rewrite of our admin portal
          using React. It's been a whirlwind of learning and I'm honored to be a part of such an enormous project. We're
          about to release!
        </p>
        <p>
          Outside of work, I spend A LOT of time with my brat of a dog, Pim. Goals with her include being featured on{' '}
          <a href="https://www.instagram.com/dogsthathike/" target="_blank" rel="noopener noreferrer">
            @dogsthathike
          </a>{' '}
          and being an all-around good citizen. When I do finally get some time to myself, I really enjoy reading. I
          love fantasy fiction and I'll happily take any recommendations. I take a lot of pleasure in art, whether it's
          photography, classic pen and pencil sketching, or paint by numbers.
        </p>

        <h4 className="hp-mt50">Skills</h4>

        <ChipContainer>
          {_.map(skills, p => (
            <Chip key={p.id} avatar={<Avatar src={p.src} />} label={p.name} classes={this.props.classes} />
          ))}
        </ChipContainer>

        <h4 className="hp-mt50">Education</h4>

        <Card>
          <CardContent>
            <div>UC San Diego</div>
            <div>B.S. Computer Science</div>
            <div>2011-2016</div>
          </CardContent>
        </Card>

        <h4 className="hp-mt50">Interests</h4>
        <ul>
          <li>Reading</li>
          <li>Photography</li>
          <li>Drawing</li>
        </ul>
      </Container>
    );
  }
}

About.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(About);
