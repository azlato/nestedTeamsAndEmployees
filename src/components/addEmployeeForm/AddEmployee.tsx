import React, { useContext } from 'react';
import { useFormik } from 'formik';
import {
  Box, Button, Typography, FormControl, InputLabel, Select, MenuItem,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { StyledTextField } from './AddEmployeeStyle';
import { TeamContext } from '../../context/TeamContext';

function AddTeam() {
  const { teams } = useContext(TeamContext);

  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      startDate: '',
      endDate: '',
      team: '',
      position: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 2 }}>Add employee</Typography>
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
        <StyledTextField
          fullWidth
          required
          id="surname"
          name="surname"
          label="Surname"
          value={formik.values.surname}
          onChange={formik.handleChange}
          error={formik.touched.surname && Boolean(formik.errors.surname)}
        />
        <DatePicker
          format="YYYY-MM-DD"
          label="Start date"
          onChange={(value) => formik.setFieldValue('startDate', value, true)}
          value={formik.values.startDate}
          slotProps={{
            textField: {
              required: true,
              fullWidth: true,
              variant: 'outlined',
              error: formik.touched.startDate && Boolean(formik.errors.startDate),
            },
          }}
          sx={{ mb: 1 }}
        />
        <DatePicker
          format="YYYY-MM-DD"
          label="End date"
          onChange={(value) => formik.setFieldValue('endDate', value, true)}
          value={formik.values.endDate}
          slotProps={{
            textField: {
              fullWidth: true,
              variant: 'outlined',
              error: formik.touched.endDate && Boolean(formik.errors.endDate),
            },
          }}
          sx={{ mb: 1 }}
        />
        <FormControl required fullWidth sx={{ mb: 1 }}>
          <InputLabel id="teamLabel">Team</InputLabel>
          <Select
            labelId="teamLabel"
            id="team"
            name="team"
            value={formik.values.team}
            label="Team"
            onChange={formik.handleChange}
            error={formik.touched.team && Boolean(formik.errors.team)}
          >
            {teams.map((team) => <MenuItem key={team.id} value={team.id}>{team.name}</MenuItem>)}
          </Select>
        </FormControl>
        <StyledTextField
          fullWidth
          required
          id="position"
          name="position"
          label="Position"
          value={formik.values.position}
          onChange={formik.handleChange}
          error={formik.touched.position && Boolean(formik.errors.position)}
        />
        <Button color="secondary" variant="contained" fullWidth type="submit">
          Add
        </Button>
      </form>
    </Box>
  );
}

export default AddTeam;
