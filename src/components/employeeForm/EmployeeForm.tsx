import React, { useContext } from 'react';
import { useFormik } from 'formik';
import dayjs from 'dayjs';
import {
  Box, Button, FormControl, InputLabel, Select, MenuItem,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { StyledTextField } from './EmployeeFormStyle';
import { TeamContext } from '../../context/TeamContext';
import { IEmployeeData } from '../../context/EmployeeContext';

interface IProps {
  isEditing?: boolean;
  initialValues: { [name: string]: string | null | dayjs.Dayjs };
  onSubmit(values: Partial<IEmployeeData>): void;
}

function EmployeeForm({ isEditing, initialValues, onSubmit }: IProps) {
  const { teams } = useContext(TeamContext);

  const formik = useFormik({
    initialValues,
    onSubmit: (values: { [name: string]: string | null | dayjs.Dayjs }, { resetForm }) => {
      const normalizedValues = {
        ...values,
        startDate:
          dayjs.isDayjs(values.startDate) && values.startDate.isValid()
            ? values.startDate.format('YYYY-MM-DD')
            : '',
        endDate: dayjs.isDayjs(values.endDate) && values.endDate.isValid() ? values.endDate.format('YYYY-MM-DD') : null,
      };
      onSubmit(normalizedValues);

      resetForm();
    },
  });

  return (
    <Box>
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
          sx={{ mb: 2 }}
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
          sx={{ mb: 2 }}
        />
        <FormControl required fullWidth sx={{ mb: 2 }}>
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
          {isEditing ? 'Edit employee' : 'Add employee'}
        </Button>
      </form>
    </Box>
  );
}

export default React.memo(EmployeeForm);
