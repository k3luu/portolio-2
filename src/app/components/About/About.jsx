import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;

class About extends React.Component {
  render() {
    return (
      <Container id="about" className="body">
        <h2>About Me</h2>
        <p>
          Currently working as a frontend engineer at Doctor.com, contributing to a complete rewrite of our admin portal
          using React. It's been a whirlwind of learning and being part of such an enormous project. We're about to
          release soon!
        </p>
        <p>
          Outside of work, I spend A LOT of time with my brat of a dog, Pim. Goals with her include being featured on{' '}
          <a href="https://www.instagram.com/dogsthathike/">@dogsthathike</a> and being an all-around good citizen. When
          I do finally get some time to myself, I really enjoy reading. I love fantasy fiction! I'll happily take any
          recommendations. I take a lot of pleasure in dabbling in art, whether it's photography, drawing, or trying out
          my water coloring skills
        </p>
      </Container>
    );
  }
}

export default About;
