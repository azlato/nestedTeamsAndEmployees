import React from 'react';
import ReactDOM from 'react-dom/client';
import { TeamContextProvider } from './context/TeamContext';
import { EmployeeContextProvider } from './context/EmployeeContext';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TeamContextProvider>
      <EmployeeContextProvider>
        <App />
      </EmployeeContextProvider>
    </TeamContextProvider>
  </React.StrictMode>,
);
