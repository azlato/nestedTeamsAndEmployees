import React, { useContext } from 'react';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { TeamContext } from '../../context/TeamContext';
import { EmployeeContext } from '../../context/EmployeeContext';
import TeamTreeItem from '../teamTreeItem/TeamTreeItem';

function TeamTree() {
  const { parentTeamToTeamsMap } = useContext(TeamContext);
  const { teamToEmployeesMap } = useContext(EmployeeContext);

  return (
    parentTeamToTeamsMap.root
    && (
    <TreeView
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      defaultExpanded={parentTeamToTeamsMap.root.map((team) => team.id)}
    >
      {parentTeamToTeamsMap.root.map((item) => (
        <TeamTreeItem
          key={item.id}
          team={item}
          parentTeamToTeamsMap={parentTeamToTeamsMap}
          teamToEmployeesMap={teamToEmployeesMap}
        />
      ))}
    </TreeView>
    )
  );
}

export default TeamTree;
