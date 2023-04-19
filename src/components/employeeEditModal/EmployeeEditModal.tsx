import React from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Modal, Box, Typography,
} from '@mui/material';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function EmployeeEditModal() {
  const [searchParams, setSearchParams] = useSearchParams();
  const employeeId = searchParams.get('employeeId');
  const isOpen = !!employeeId;

  const onClose = () => {
    setSearchParams((prev: URLSearchParams) => {
      prev.delete('employeeId');
      return prev;
    });
  };

  return (
    <Modal
      open={isOpen}
      aria-labelledby="employee-modal-title"
      onClose={onClose}
    >
      <Box sx={{ ...style, width: 400 }}>
        <Typography variant="h6" id="employee-modal-title" sx={{ mb: 2 }}>
          Edit employee with id
          &quot;
          {employeeId}
          &quot;
        </Typography>
      </Box>
    </Modal>
  );
}

export default EmployeeEditModal;
