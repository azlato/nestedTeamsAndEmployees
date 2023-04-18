import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import lightTheme from './theme';
import TeamTree from './components/teamTree/TeamTree';
import Header from './components/header/Header';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Container maxWidth="xl" sx={{ p: 3 }}>
        <Header />
        <Typography variant="h2" sx={{ mb: 2 }}>Teams</Typography>
        <TeamTree />
      </Container>
    </ThemeProvider>
  );
}

export default App;
