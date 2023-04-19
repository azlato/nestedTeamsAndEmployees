import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import ReactDOM from 'react-dom/client';
import { TeamContextProvider } from './context/TeamContext';
import { EmployeeContextProvider } from './context/EmployeeContext';
import App from './App';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <TeamContextProvider>
        <EmployeeContextProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <App />
          </LocalizationProvider>
        </EmployeeContextProvider>
      </TeamContextProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
