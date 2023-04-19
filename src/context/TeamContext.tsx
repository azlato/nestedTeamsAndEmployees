import React, { createContext, useMemo } from 'react';
import { useQuery, useQueryClient, useMutation } from 'react-query';
import apiClient from '../utils/apiClient';

export interface ITeamData {
  id: string;
  createdAt: string;
  name: string;
  parentTeam: null | string;
}

export interface ITeamsMap {
  [id: string]: ITeamData[];
}

interface ITeamsContext {
  teamsMap: ITeamsMap;
  teams: ITeamData[];
  addTeam(data: Partial<ITeamData>): void;
}

export const TeamContext = createContext<ITeamsContext>({
  teamsMap: {},
  teams: [],
  addTeam: () => {},
});

const API_URL = 'https://nktebdhspzvpwguqcksn.supabase.co/rest/v1/teams';

const postTeam = async (data: Partial<ITeamsMap>): Promise<string> => {
  // return new Promise((resolve) => setTimeout(resolve, 1000));

  const response = await apiClient(API_URL, data);
  if (!response.ok) {
    throw new Error(`Failed to insert new team. Status ${response.statusText}: ${response.body}`);
  }
  return response.text();
};

export function TeamContextProvider({ children }: { children: React.ReactNode }) {
  const queryClient = useQueryClient();
  const { data } = useQuery<ITeamData[]>(
    'team',
    () => apiClient(`${API_URL}?select=*`).then((res) => res.json()),
  );

  // Mutations
  const { mutate: addTeam } = useMutation(postTeam, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries('team');
    },
  });

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
    addTeam,
  }), [data]);

  return <TeamContext.Provider value={value}>{children}</TeamContext.Provider>;
}
