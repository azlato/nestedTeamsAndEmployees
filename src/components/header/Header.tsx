import React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import alvenoLogo from '../../assets/alveno-logo-dark.svg';

function Header() {
  return (
    <>
      <AppBar>
        <Container maxWidth="xl">
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              <Box component="img" src={alvenoLogo} alt="" sx={{ width: [60, 120] }} />
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
    </>
  );
}

export default Header;
