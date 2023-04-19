import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import lightTheme from './theme';
import Layout from './components/layout/Layout';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Routes>
        <Route index path="/" element={<Layout />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
