import React, { createContext, useMemo } from 'react';
import useSWR from 'swr';
import fetcher from '../utils/fetcher';

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
}

export const EmployeeContext = createContext<IEmployeesContext>({ teamToEmployeesMap: {} });

const API_URL = 'https://nktebdhspzvpwguqcksn.supabase.co/rest/v1/employees?select=*';

export function EmployeeContextProvider({ children }: { children: React.ReactNode }) {
  const { data } = useSWR<IEmployeeData[]>(API_URL, fetcher);

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
  }), [data]);

  return <EmployeeContext.Provider value={value}>{children}</EmployeeContext.Provider>;
}
