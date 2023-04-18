import React from 'react';
import { ITeamData, ITeamsMap } from '../../context/TeamContext';
import { IEmployeesMap } from '../../context/EmployeeContext';
import { StyledTeamTreeItem } from './TeamTreeItemStyle';
import EmployeeTreeItem from '../employeeTreeItem/EmployeeTreeItem';

interface IProps {
  team: ITeamData;
  teamsMap: ITeamsMap;
  teamToEmployeesMap: IEmployeesMap;
}

function TeamTreeItem({ team, teamsMap, teamToEmployeesMap }: IProps): React.ReactElement {
  return (
    <StyledTeamTreeItem
      nodeId={team.id}
      label={team.name}
    >
      {teamToEmployeesMap[team.id] && teamToEmployeesMap[team.id].map((item) => (
        <EmployeeTreeItem key={item.id} employee={item} />
      ))}

      {teamsMap && teamsMap[team.id] && teamsMap[team.id].map((item) => (
        <TeamTreeItem key={item.id} team={item} teamsMap={teamsMap} teamToEmployeesMap={teamToEmployeesMap} />
      ))}
    </StyledTeamTreeItem>
  );
}

export default React.memo(TeamTreeItem);
