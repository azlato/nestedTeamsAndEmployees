import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

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
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Container maxWidth="xl" sx={{ p: 3 }}>
        Content
      </Container>
    </ThemeProvider>
  );
}

export default App;
