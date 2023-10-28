import React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import './index.css';

const Violation = () => {
  return (

    <div className='container'>
      <Paper elevation={3} className='boxx'>
        <div className='circle'>1</div>
        <Box>
          <Typography variant="body2" component="div" className='textt'>
            Your text goes here.
          </Typography>
        </Box>
      </Paper>
    </div>
  
  );
};

export default Violation;
