import React, { useMemo } from 'react';
import { IEmployeeData } from '../../context/EmployeeContext';
import { StyledEmployeeTreeItem } from './EmployeeTreeItemStyle';

interface IProps {
  employee: IEmployeeData;
}

function EmployeeItem({ employee }: IProps): React.ReactElement {
  const isQuitEmployee = useMemo(
    () => employee.endDate !== null && new Date(employee.endDate) < new Date(),
    [employee],
  );
  const endDateFormatted = employee.endDate && new Date(employee.endDate).toLocaleDateString('cs-Cz');

  return (
    <StyledEmployeeTreeItem
      nodeId={employee.id}
      label={`${employee.name} ${employee.surname} - ${employee.position}`}
      isQuitEmployee={isQuitEmployee}
      disabled={isQuitEmployee}
      title={isQuitEmployee ? `Quit job at ${endDateFormatted}` : undefined}
    />
  );
}

export default React.memo(EmployeeItem);
