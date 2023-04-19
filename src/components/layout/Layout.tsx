import React, { useContext } from 'react';
import {
  Box, Container, Typography, Grid,
} from '@mui/material';
import TeamTree from '../teamTree/TeamTree';
import Header from '../header/Header';
import EmployeeForm from '../employeeForm/EmployeeForm';
import TeamForm from '../teamForm/TeamForm';
import EmployeeEditModal from '../employeeEditModal/EmployeeEditModal';
import { EmployeeContext } from '../../context/EmployeeContext';

function Layout() {
  const { addEmployee } = useContext(EmployeeContext);

  return (
    <Container maxWidth="xl" sx={{ p: 3 }}>
      <Header />
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Typography variant="h2" sx={{ mb: 2 }}>Teams</Typography>
          <TeamTree />
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h4" sx={{ mb: 2 }}>Add employee</Typography>
          <EmployeeForm
            initialValues={{
              name: '',
              surname: '',
              startDate: '',
              endDate: '',
              team: '',
              position: '',
            }}
            onSubmit={addEmployee}
          />
          <Box sx={{ mb: 4 }} />
          <Typography variant="h4" sx={{ mb: 2 }}>Add team</Typography>
          <TeamForm />
        </Grid>
        <EmployeeEditModal />
      </Grid>
    </Container>
  );
}

export default Layout;
