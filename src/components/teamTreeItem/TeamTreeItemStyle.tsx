import { styled } from '@mui/material/styles';
import TreeItem, { treeItemClasses } from '@mui/lab/TreeItem';
import { Theme } from '@mui/material';

export const StyledTeamTreeItem = styled(TreeItem)(({ theme }: { theme: Theme }) => ({
  [`& .${treeItemClasses.content}`]: {
    padding: theme.spacing(1),
    borderRadius: theme.spacing(1),
  },
}));

export default StyledTeamTreeItem;
