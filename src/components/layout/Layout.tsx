import React from 'react';
import {
  Box, Container, Typography, Grid,
} from '@mui/material';
import TeamTree from '../teamTree/TeamTree';
import Header from '../header/Header';
import EmployeeForm from '../employeeForm/EmployeeForm';
import TeamForm from '../teamForm/TeamForm';
import EmployeeEditModal from '../employeeEditModal/EmployeeEditModal';

function Layout() {
  return (
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
        <EmployeeEditModal />
      </Grid>
    </Container>
  );
}

export default Layout;
