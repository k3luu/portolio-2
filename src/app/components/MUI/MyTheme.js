import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

export const MyTheme = createMuiTheme({
  palette: {
    primary: blue
  },
  props: {
    MuiTabs: {
      style: { height: '100%' },
      indicatorColor: 'primary',
      textColor: 'primary'
    },
    MuiTab: {
      disableRipple: true,
      style: { height: '100%' }
    }
  },
  overrides: {
    MuiTab: {
      label: {
        fontWeight: 'bold'
      }
    }
  }
});
