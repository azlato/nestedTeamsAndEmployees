import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';

export const StyledTextField = styled(TextField)(
  ({ theme }) => ({
    marginBottom: theme.spacing(2),
  }),
);

export default StyledTextField;
