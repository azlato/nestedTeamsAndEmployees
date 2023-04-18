import React from 'react';
import { styled } from '@mui/material/styles';
import TreeItem, { treeItemClasses } from '@mui/lab/TreeItem';
import { Theme } from '@mui/material';
import { ITeamData, ITeamsMap } from '../context/TeamContext';

interface IProps {
  team: ITeamData;
  teamsMap: ITeamsMap;
}

const StyledTeamTreeItem = styled(TreeItem)(({ theme }: { theme: Theme }) => ({
  [`& .${treeItemClasses.content}`]: {
    padding: theme.spacing(1),
    borderRadius: theme.spacing(1),
  },
}));

function TeamTreeItem({ team, teamsMap }: IProps): React.ReactElement {
  return (
    <StyledTeamTreeItem nodeId={team.id} label={team.name}>
      {teamsMap && teamsMap[team.id] && teamsMap[team.id].map((item) => (
        <TeamTreeItem key={item.id} team={item} teamsMap={teamsMap} />
      ))}
    </StyledTeamTreeItem>
  );
}

export default React.memo(TeamTreeItem);
