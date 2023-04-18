import React, { useContext } from 'react';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { TeamContext } from '../../context/TeamContext';
import { EmployeeContext } from '../../context/EmployeeContext';
import TeamTreeItem from '../teamTreeItem/TeamTreeItem';

function TeamTree() {
  const { teamsMap } = useContext(TeamContext);
  const { teamToEmployeesMap } = useContext(EmployeeContext);

  return (
    <TreeView
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      {teamsMap.root && teamsMap.root.map((item) => (
        <TeamTreeItem key={item.id} team={item} teamsMap={teamsMap} teamToEmployeesMap={teamToEmployeesMap} />
      ))}
    </TreeView>
  );
}

export default TeamTree;
