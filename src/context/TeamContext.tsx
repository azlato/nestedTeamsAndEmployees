import React, { createContext, useMemo } from 'react';
import { useQuery } from 'react-query'
import fetcher from '../utils/fetcher';

export interface ITeamData {
  'id': string;
  'createdAt': string;
  'name': string;
  'parentTeam': null | string;
}

export interface ITeamsMap {
  [id: string]: ITeamData[];
}

interface ITeamsContext {
  teamsMap: ITeamsMap;
  teams: ITeamData[];
}

export const TeamContext = createContext<ITeamsContext>({
  teamsMap: {},
  teams: [],
});

const API_URL = 'https://nktebdhspzvpwguqcksn.supabase.co/rest/v1/teams?select=*';

export function TeamContextProvider({ children }: { children: React.ReactNode }) {
  const { data } = useQuery<ITeamData[]>('team', () => fetcher(API_URL));

  const teamsMap = useMemo(() => (data ? data.reduce<ITeamsMap>(
    (result, item) => {
      if (!item.parentTeam) {
        result.root.push(item);
      } else {
        if (!result[item.parentTeam]) {
          result[item.parentTeam] = [];
        }

        result[item.parentTeam].push(item);
      }

      return result;
    },
    { root: [] },
  ) : ({} as ITeamsMap)), [data]);

  const value = useMemo(() => ({
    teamsMap,
    teams: data || [],
  }), [data]);

  return <TeamContext.Provider value={value}>{children}</TeamContext.Provider>;
}
