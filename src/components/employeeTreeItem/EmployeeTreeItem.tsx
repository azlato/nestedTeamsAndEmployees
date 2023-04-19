import React, { useMemo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { IEmployeeData } from '../../context/EmployeeContext';
import { StyledEmployeeTreeItem } from './EmployeeTreeItemStyle';

interface IProps {
  employee: IEmployeeData;
}

function EmployeeItem({ employee }: IProps): React.ReactElement {
  const [, setSearchParams] = useSearchParams();
  const isQuitEmployee = useMemo(
    () => employee.endDate !== null && new Date(employee.endDate) < new Date(),
    [employee],
  );
  const endDateFormatted = employee.endDate && new Date(employee.endDate).toLocaleDateString('cs-Cz');

  const onClick = useCallback(() => {
    setSearchParams((prevParams: URLSearchParams) => {
      prevParams.set('employeeId', employee.id);
      return prevParams;
    });
  }, [employee]);

  return (
    <StyledEmployeeTreeItem
      nodeId={employee.id}
      label={`${employee.name} ${employee.surname} - ${employee.position}`}
      isQuitEmployee={isQuitEmployee}
      disabled={isQuitEmployee}
      title={isQuitEmployee ? `Quit job at ${endDateFormatted}` : undefined}
      onClick={onClick}
    />
  );
}

export default React.memo(EmployeeItem);
