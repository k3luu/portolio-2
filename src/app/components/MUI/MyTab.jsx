import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';

const styles = theme => ({
  root: {
    minHeight: 70,
    [theme.breakpoints.up('md')]: {
      minWidth: 140
    },
    [theme.breakpoints.down('sm')]: {
      flexGrow: 1
    }
  },
  label: {
    fontWeight: 'bold',
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  },
  labelContainer: {
    [theme.breakpoints.down('xs')]: {
      padding: 0
    }
  },
  labelIcon: {
    [theme.breakpoints.down('xs')]: {
      fontSize: 20
    }
  }
});

let MyTab = props => <Tab {...props} disableRipple />;

export default withStyles(styles)(MyTab);
