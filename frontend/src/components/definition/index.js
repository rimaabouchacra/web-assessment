import React from 'react';
import Typography from '@mui/material/Typography';
import icon from "../../images/arrow.png";
import './index.css';

const Definition = () => {
  return (
    <div className='def-text'>
      <Typography variant="h3">
        Criminal Court of Appeal
      </Typography><br />
      
      <div className="definition-item">
        <img src={icon} alt="arrow" className="icon" />
        <Typography variant="body1">
          Within every governorate, there is one or more courts of appeal.
        </Typography>
      </div>

      <div className="definition-item">
        <img src={icon} alt="arrow" className="icon" />
        <Typography variant="body1">
          The Court of Appeal consists of 3 judges: a president and two consultants.
        </Typography>
      </div>

      <div className="definition-item">
        <img src={icon} alt="arrow" className="icon" />
        <Typography variant="body1">
          The public prosecution is represented before the Court of Appeal by the Appellate Public Prosecutor or an Attorney General.
        </Typography>
      </div>
    </div>
  );
};

export default Definition;
