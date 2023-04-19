import React, { createContext, useMemo } from 'react';
import { useQuery, useQueryClient, useMutation } from 'react-query';
import apiClient from '../utils/apiClient';

export interface IEmployeeData {
  id: string;
  createdAt: string;
  name: string;
  surname: string;
  startDate: string;
  endDate: null | string;
  team: string;
  position: string;
}

export interface IEmployeesMap {
  [teamId: string]: IEmployeeData[];
}

interface IEmployeesContext {
  teamToEmployeesMap: IEmployeesMap;
  addEmployee(data: Partial<IEmployeeData>): void;
}

export const EmployeeContext = createContext<IEmployeesContext>({
  teamToEmployeesMap: {},
  addEmployee: () => {},
});

const API_URL = 'https://nktebdhspzvpwguqcksn.supabase.co/rest/v1/employees';

const postEmployee = async (data: Partial<IEmployeeData>): Promise<string> => {
  const response = await apiClient(API_URL, data);
  if (!response.ok) {
    throw new Error(`Failed to insert new employee. Status ${response.statusText}: ${response.body}`);
  }
  return response.text();
};

export function EmployeeContextProvider({ children }: { children: React.ReactNode }) {
  const queryClient = useQueryClient();
  const { data } = useQuery<IEmployeeData[]>(
    'employee',
    () => apiClient(`${API_URL}?select=*`).then((res) => res.json()),
  );

  // Mutations
  const { mutate: addEmployee } = useMutation(postEmployee, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries('employee');
    },
  });

  // Preparing data for rendering team tree. It is Map object, where key is 'id' of parent team and value is
  // array of children employee.
  const teamToEmployeesMap = useMemo(() => (data ? data.reduce<IEmployeesMap>(
    (result, item) => {
      if (!result[item.team]) {
        result[item.team] = [item];
      } else {
        result[item.team].push(item);
      }

      return result;
    },
    {},
  ) : ({} as IEmployeesMap)), [data]);

  const value = useMemo(() => ({
    teamToEmployeesMap,
    addEmployee,
  }), [data]);

  return <EmployeeContext.Provider value={value}>{children}</EmployeeContext.Provider>;
}
