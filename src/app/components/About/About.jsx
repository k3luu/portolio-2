import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
/*eslint-disable*/
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
/*eslint-enable*/

const Container = styled.div``;

const Img = styled.img`
  height: 100px;
  width: 100px;
`;

class About extends React.Component {
  render() {
    return (
      <Container id="about" className="body">
        <h2>About Me</h2>

        <p>
          Currently working as a frontend engineer at Doctor.com, contributing
          to a complete rewrite of our admin portal using React. It's been a
          whirlwind of learning and I'm honored to be a part of such an enormous
          project. We just release the beta version!
        </p>

        <h4 className="hp-mt50">Education</h4>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Img
            src="https://upload.wikimedia.org/wikipedia/commons/1/18/UCSD_Seal.png"
            alt="UCSD"
          />
          <div style={{ marginLeft: 30 }}>
            <div>UC San Diego</div>
            <div>B.S. Computer Science</div>
            <div>Minor: Communication</div>
            <div>2011-2016</div>
          </div>
        </div>

        <h4 className="hp-mt50">Interests</h4>
        <Carousel
          centerMode
          emulateTouch
          showThumbs={false}
          showStatus={false}
          autoPlay
          interval={3000}
          infiniteLoop
        >
          <img
            alt="Photography"
            src="https://s3-us-west-1.amazonaws.com/kaluu/portfolio/assets/photography.jpg"
          />
          <img
            alt="Reading"
            src="https://s3-us-west-1.amazonaws.com/kaluu/portfolio/assets/reading.jpg"
          />
          <img
            alt="Hiking"
            src="https://s3-us-west-1.amazonaws.com/kaluu/portfolio/assets/hiking.jpg"
          />
        </Carousel>
      </Container>
    );
  }
}

export default About;
