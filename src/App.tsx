import React, { useContext } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { TeamContext } from './context/TeamContext';

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

function App() {
  const { items } = useContext(TeamContext);

  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Container maxWidth="xl" sx={{ p: 3 }}>
        Content
        {' '}
        {items?.length}
      </Container>
    </ThemeProvider>
  );
}

export default App;
