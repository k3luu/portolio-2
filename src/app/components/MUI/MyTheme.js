import { createMuiTheme } from '@material-ui/core/styles';

export const MyTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#56b1bf' // fountain-blue
    },
    secondary: {
      main: '#032b2f' // daintree
    },
    error: {
      main: '#d73a31' // valencia
    }
  },
  props: {},
  overrides: {}
});
