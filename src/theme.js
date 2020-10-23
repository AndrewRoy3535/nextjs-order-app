import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#f2f3f4',
      dark: 'blue',
    },
    background: {
      paper: '#FFFAFA'
    },
    secondary: {
      main: '#FB6464',
    },
  },
});

export default theme;
