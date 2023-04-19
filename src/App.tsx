import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import lightTheme from './theme';
import TeamTree from './components/teamTree/TeamTree';
import Header from './components/header/Header';
import EmployeeForm from './components/employeeForm/EmployeeForm';
import TeamForm from './components/teamForm/TeamForm';

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
            <EmployeeForm />
            <Box sx={{ mb: 4 }} />
            <TeamForm />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
