import React, { useCallback, useContext, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import dayjs from 'dayjs';
import {
  Modal, Box, Typography,
} from '@mui/material';
import EmployeeForm from '../employeeForm/EmployeeForm';
import { EmployeeContext, IEmployeeData } from '../../context/EmployeeContext';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  maxWidth: '100%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function EmployeeEditModal() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { employees, updateEmployee } = useContext(EmployeeContext);
  const employeeId = searchParams.get('employeeId');
  const isOpen = !!employeeId;

  const initialEmployeeData = useMemo(
    () => {
      const employee = employees.find((item) => item.id === employeeId);
      if (!employee) return null;

      return {
        ...employee,
        startDate: dayjs(employee.startDate),
        endDate: dayjs(employee.endDate),
      };
    },
    [employees, employeeId],
  );

  const onCloseModal = useCallback(() => {
    setSearchParams((prev: URLSearchParams) => {
      prev.delete('employeeId');
      return prev;
    });
  }, []);

  const onSubmit = (values: Partial<IEmployeeData>) => {
    updateEmployee(values);
    console.log('submit', JSON.stringify(values, null, 2));

    // Close modal by removing id parameter
    onCloseModal();
  };

  return (
    <Modal
      open={isOpen}
      aria-labelledby="employee-modal-title"
      onClose={onCloseModal}
    >
      <Box sx={{ ...style, width: 600 }}>
        <Typography variant="h6" id="employee-modal-title" sx={{ mb: 2 }}>
          Edit employee with id
          &quot;
          {employeeId}
          &quot;
        </Typography>
        {initialEmployeeData
            && (
            <EmployeeForm
              isEditing
              initialValues={initialEmployeeData}
              onSubmit={onSubmit}
            />
            )}
      </Box>
    </Modal>
  );
}

export default EmployeeEditModal;
