import React, { useContext } from 'react';
import { useFormik } from 'formik';
import {
  Box, Button, Typography, FormControl, InputLabel, Select, MenuItem,
} from '@mui/material';
import { StyledTextField } from '../employeeForm/EmployeeFormStyle';
import { TeamContext } from '../../context/TeamContext';

function TeamForm() {
  const { teams, addTeam } = useContext(TeamContext);

  const formik = useFormik({
    initialValues: {
      name: '',
      parentTeam: '',
    },
    onSubmit: (values) => {
      const normalizedValues = {
        ...values,
        parentTeam: values.parentTeam || null,
      };
      addTeam(normalizedValues);
    },
  });

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 2 }}>Add team</Typography>
      <form onSubmit={formik.handleSubmit}>
        <StyledTextField
          fullWidth
          required
          id="name"
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
        />
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel id="parentTeamLabel">Parent team</InputLabel>
          <Select
            labelId="parentTeamLabel"
            id="parentTeam"
            name="parentTeam"
            value={formik.values.parentTeam}
            label="Parent team"
            onChange={formik.handleChange}
            error={formik.touched.parentTeam && Boolean(formik.errors.parentTeam)}
          >
            {teams.map((team) => <MenuItem key={team.id} value={team.id}>{team.name}</MenuItem>)}
          </Select>
        </FormControl>
        <Button color="secondary" variant="contained" fullWidth type="submit">
          Add team
        </Button>
      </form>
    </Box>
  );
}

export default TeamForm;
