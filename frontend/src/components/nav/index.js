import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'
import './index.css'

const Navbar = () => {
  return (
    <div>
      <AppBar position="static">
      <Toolbar className='nav'>
        <img src={logo} alt="Logo" style={{ height: 80, marginRight: 20 }} />
        <Box sx={{ flexGrow: 1 }} />
        <Button component={Link} to="/" color="inherit">
          <Box className='nav-link'>English</Box>
        </Button>
         <Button component={Link} to="/ar" color="inherit">
          <Box className='nav-link'>Arabic</Box>
        </Button>
      </Toolbar>
    </AppBar>

    </div>
    
    
  );
};

export default Navbar;

