import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import ReactDOM from 'react-dom/client';
import { TeamContextProvider } from './context/TeamContext';
import { EmployeeContextProvider } from './context/EmployeeContext';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TeamContextProvider>
      <EmployeeContextProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <App />
        </LocalizationProvider>
      </EmployeeContextProvider>
    </TeamContextProvider>
  </React.StrictMode>,
);
