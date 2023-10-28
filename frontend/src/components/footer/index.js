import React from 'react';
import Typography from '@mui/material/Typography';
import './index.css'

const Footer = () => {
  
  return (
    <footer className='footer'>
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} Criminal Court of Appeal. All Rights Reserved.
      </Typography>
    </footer>
  );
};

export default Footer;
