import React from 'react';
import TreeItem from '@mui/lab/TreeItem';
import { ITeamData, ITeamsMap } from '../context/TeamContext';

interface IProps {
  team: ITeamData;
  teamsMap: ITeamsMap;
}

function TeamTreeItem({ team, teamsMap }: IProps): React.ReactElement {
  return (
    <TreeItem nodeId={team.id} label={team.name}>
      {teamsMap && teamsMap[team.id] && teamsMap[team.id].map((item) => (
        <TeamTreeItem key={item.id} team={item} teamsMap={teamsMap} />
      ))}
    </TreeItem>
  );
}

export default TeamTreeItem;
