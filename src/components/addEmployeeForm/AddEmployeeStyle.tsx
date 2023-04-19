import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';

export const StyledTextField = styled(TextField)(
  ({ theme }) => ({
    marginBottom: theme.spacing(1),
  }),
);

export default StyledTextField;
