import React from 'react';
import Typography from '@mui/material/Typography';
import note from "../../images/note.png";
import './index.css';

const Judgment = () => {

  return (
    
    <div id='judgments-section' className='title'>
     
      <Typography variant="h3">
        Judgments
      </Typography><br />

      <div className="search-item">
        <img src={note} alt="icon" className="icon-note" />
        <Typography variant="body1">
          The Court of Appeal is entitled, when exercising its tasks, to listen to witnesses, interrogate
          the parties of the lawsuit, invite new witnesses, <br /> appoint an expert, listen to experts and carry
          out any new investigations it deems appropriate...
        </Typography>
      </div><br />
    </div>
  );
};

export default Judgment;