import { createTheme } from '@mui/material/styles';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#02D076',
    },
    secondary: {
      main: '#10BFFC',
    },
  },
});

export default lightTheme;
