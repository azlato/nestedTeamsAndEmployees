import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import TeamTree from './components/TeamTree';

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
        <Typography variant="h1" sx={{ mb: 2 }}>Teams</Typography>
        <TeamTree />
      </Container>
    </ThemeProvider>
  );
}

export default App;
