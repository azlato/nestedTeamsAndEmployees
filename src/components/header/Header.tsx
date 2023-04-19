import React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import alvenoLogo from '../../assets/alveno-logo-dark.svg';

function Header() {
  return (
    <>
      <AppBar>
        <Container maxWidth="xl">
          <Toolbar>
            <Box
              component="a"
              href="/"
              sx={{
                display: 'flex',
                mr: 2,
                width: [60, 120],
              }}
            >
              <img src={alvenoLogo} alt="Alveno by Iresoft logo" />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
    </>
  );
}

export default Header;
