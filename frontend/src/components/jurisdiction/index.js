import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './index.css'; // Import your CSS file

const Jurisdiction = () => {
  return (
    <div className="your-section">
      <Typography variant="h3">Section Title</Typography>

      <div className="bordered-section">
        <Typography variant="body1">
          This is some descriptive text within the bordered section.
        </Typography>

        <div className="box-container">
          <div className="box">
            <Typography variant="body2">Box 1</Typography>
          </div>
          <div className="box">
            <Typography variant="body2">Box 2</Typography>
          </div>
          <div className="box">
            <Typography variant="body2">Box 3</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jurisdiction;
