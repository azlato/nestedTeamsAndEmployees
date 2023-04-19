import React from 'react';
import { ITeamData, ITeamsMap } from '../../context/TeamContext';
import { IEmployeesMap } from '../../context/EmployeeContext';
import { StyledTeamTreeItem } from './TeamTreeItemStyle';
import EmployeeTreeItem from '../employeeTreeItem/EmployeeTreeItem';

interface IProps {
  team: ITeamData;
  parentTeamToTeamsMap: ITeamsMap;
  teamToEmployeesMap: IEmployeesMap;
}

function TeamTreeItem({ team, parentTeamToTeamsMap, teamToEmployeesMap }: IProps): React.ReactElement {
  return (
    <StyledTeamTreeItem
      nodeId={team.id}
      label={team.name}
    >
      {teamToEmployeesMap[team.id] && teamToEmployeesMap[team.id].map((item) => (
        <EmployeeTreeItem key={item.id} employee={item} />
      ))}

      {parentTeamToTeamsMap && parentTeamToTeamsMap[team.id] && parentTeamToTeamsMap[team.id].map((item) => (
        <TeamTreeItem
          key={item.id}
          team={item}
          parentTeamToTeamsMap={parentTeamToTeamsMap}
          teamToEmployeesMap={teamToEmployeesMap}
        />
      ))}
    </StyledTeamTreeItem>
  );
}

export default React.memo(TeamTreeItem);
