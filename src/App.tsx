import React, { useContext } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import TreeView from '@mui/lab/TreeView';
import { TeamContext } from './context/TeamContext';
import TeamTreeItem from './components/TeamTreeItem';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#02D076',
    },
    secondary: {
      main: '#10BFFC',
    },
  },
});

function App() {
  const { teamsMap } = useContext(TeamContext);

  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Container maxWidth="xl" sx={{ p: 3 }}>
        Teams
        <TreeView
          sx={{
            height: 216, flexGrow: 1, maxWidth: 400, overflowY: 'auto',
          }}
        >
          {teamsMap.root && teamsMap.root.map((item) => (
            <TeamTreeItem key={item.id} team={item} teamsMap={teamsMap} />
          ))}
        </TreeView>
      </Container>
    </ThemeProvider>
  );
}

export default App;
