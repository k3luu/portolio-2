/*eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const Container = styled.div``;

const Img = styled.img`
  height: 100px;
  width: 100px;
`;

const styles = theme => ({
  eduCard: {
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  chipRoot: {
    fontSize: 14,
    margin: 5
  }
});

class About extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Container id="about" className="body">
        <h2>About Me</h2>

        <p>
          Currently working as a frontend engineer at Doctor.com, contributing to a complete rewrite of our admin portal
          using React. It's been a whirlwind of learning and I'm honored to be a part of such an enormous project. We're
          about to release!
        </p>

        <h4 className="hp-mt50">Education</h4>

        <Card className={classes.eduCard}>
          <CardContent>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Img src="https://upload.wikimedia.org/wikipedia/commons/1/18/UCSD_Seal.png" alt="UCSD" />
              <div className="hp-ml30">
                <div>UC San Diego</div>
                <div>B.S. Computer Science</div>
                <div>Minor: Communication</div>
                <div>2011-2016</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <h4 className="hp-mt50">Interests</h4>
        <ul>
          <li>Reading</li>
          <li>Photography</li>
          <li>Drawing</li>
          <li>Hiking</li>
        </ul>
      </Container>
    );
  }
}

About.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(About);
/*eslint-enable*/
