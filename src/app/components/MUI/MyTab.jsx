import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';

const styles = theme => ({
  root: {
    [theme.breakpoints.up('md')]: {
      minWidth: 120
    }
  },
  label: {
    fontWeight: 'bold'
  }
});

let MyTab = props => <Tab style={{ height: '100%' }} {...props} disableRipple />;

export default withStyles(styles)(MyTab);
