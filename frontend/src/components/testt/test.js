import React from 'react';
import { Button, AppBar, Toolbar, Typography } from '@mui/material';
const AboutUs = () =>{
return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Material-UI App</Typography>
        </Toolbar>
      </AppBar>
      <div>
        <Button variant="contained" color="primary">
          Click Me
        </Button>
      </div>
    </div>
  );
}
export default AboutUs