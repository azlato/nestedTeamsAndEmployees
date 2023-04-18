import { styled } from '@mui/material/styles';
import TreeItem, { treeItemClasses } from '@mui/lab/TreeItem';

export const StyledEmployeeTreeItem = styled(TreeItem, {
  shouldForwardProp: (prop) => prop !== 'isQuitEmployee',
})<{ isQuitEmployee: boolean }>(
  ({ theme, isQuitEmployee }) => ({
    [`& .${treeItemClasses.content}`]: {
      padding: theme?.spacing(1),
      borderRadius: theme?.spacing(1),
    },
    ...(isQuitEmployee ? {
      [`& .${treeItemClasses.content} .${treeItemClasses.label}`]: {
        color: theme.palette.grey[400],
      },
    } : {}),
  }),
);

export default StyledEmployeeTreeItem;
