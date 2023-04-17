import React, { createContext, useMemo } from 'react';
import useSWR from 'swr';
import fetcher from '../utils/fetcher';

interface ITeamsContext {
  items: number[];
}

export const TeamContext = createContext<ITeamsContext>({ items: [] });

const API_URL = 'https://nktebdhspzvpwguqcksn.supabase.co/rest/v1/teams?select=*';

export function TeamContextProvider({ children }: { children: React.ReactNode }) {
  const { data } = useSWR(API_URL, fetcher);

  const value = useMemo(() => ({
    items: data,
  }), [data]);
  return <TeamContext.Provider value={value}>{children}</TeamContext.Provider>;
}
