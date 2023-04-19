import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import lightTheme from './theme';
import TeamTree from './components/teamTree/TeamTree';
import Header from './components/header/Header';
import AddTeam from './components/addTeamForm/AddTeam';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Container maxWidth="xl" sx={{ p: 3 }}>
        <Header />
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Typography variant="h2" sx={{ mb: 2 }}>Teams</Typography>
            <TeamTree />
          </Grid>
          <Grid item xs={12} md={4}>
            <AddTeam />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
