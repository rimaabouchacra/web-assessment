import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './index.css'; 

const Jurisdiction = () => {
  return (
    <div>
     <div className='title'>
        <Typography  variant="h3">Jurisdiction</Typography>
     </div>   
    
    <div className="jurisdiction-section">
      <div className="bordered-section">
        <Typography variant="body1">
          The Court of Appeal considers the appeal of all judgments issued by the Criminal Single Judge
          in the cases of misdemeanors, provided that they shall have been settled in the merits of the
          dispute.<br/>
          However, if they were not settled in the merits of the dispute, they shall be appealed with the
          final judgment only. <br />
          <strong>With the exception of:</strong>
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
    </div>
    
  );
};

export default Jurisdiction;
