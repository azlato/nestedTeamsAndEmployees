import React, { useContext } from 'react';
import { useFormik } from 'formik';
import {
  Button, Typography, FormControl, InputLabel, Select, MenuItem,
} from '@mui/material';
import Box from '@mui/material/Box';
import { StyledTextField } from './AddTeamStyle';
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
      <Typography variant="h3">Add team</Typography>
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
          label="surname"
          value={formik.values.surname}
          onChange={formik.handleChange}
          error={formik.touched.surname && Boolean(formik.errors.surname)}
        />
        <StyledTextField
          fullWidth
          required
          id="startDate"
          name="startDate"
          label="startDate"
          value={formik.values.startDate}
          onChange={formik.handleChange}
          error={formik.touched.startDate && Boolean(formik.errors.startDate)}
        />
        <StyledTextField
          fullWidth
          id="endDate"
          name="endDate"
          label="endDate"
          value={formik.values.endDate}
          onChange={formik.handleChange}
          error={formik.touched.endDate && Boolean(formik.errors.endDate)}
        />
        <FormControl required fullWidth sx={{ mb: 1 }}>
          <InputLabel id="teamLabel">Team</InputLabel>
          <Select
            labelId="teamLabel"
            id="team"
            name="team"
            value={formik.values.team}
            label="team"
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
          label="position"
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
