import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#d71149',
    },
    secondary: {
      main: '#202124',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '*': {
          'scrollbar-width': 'thin',
        },
        '*::-webkit-scrollbar': {
          width: '4px',
          height: '8px',
        },
        '*::-webkit-scrollbar-track': {
          'box-shadow': 'inset 0 0 6px rgba(0, 0, 0, 0.3)',
        },
        '*::-webkit-scrollbar-thumb': {
          'background-color': '#d71149',
          'outline': '1px solid slategrey',
        },
      }
    }
  },
});

export default theme;
