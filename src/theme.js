import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFB74D', // Color cálido
    },
    secondary: {
      main: '#66BB6A', // Nota de verde
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial',
  },
});

export default theme;
