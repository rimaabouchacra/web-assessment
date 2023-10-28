import React from 'react';
import Typography from '@mui/material/Typography';
import note from '../../images/note.png';
import quote from '../../images/quote.png';
import './index.css';
import clock from '../../images/clock.png'

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

      <div className="search-item">
        <img src={clock} alt="icon" className="icon-note clock" />
        <Typography fontWeight='bold' classes={{ root: 'custom-typography' }}>
          Delay of appeal:
        </Typography>
      </div><br />

      <div className="search-item">
        <img src={quote} alt="icon" className="icon-quote" />
        <Typography variant="h5" fontWeight='bold'>
          Final judgments:
        </Typography>
      </div><br />

      <div className="row">
      <div className="component">
        <div className="title-box">
          <Typography fontWeight='bold'>With respect to the plaintiff,defendant, responsible for money, and guarantor, the delay is 15 days:</Typography>
        </div>
        <div className="text-box">
          <Typography variant="body2">As of the date of its issuance if it is made in presentia. As of the date of being notied whether it is made in presentia or absentia.</Typography>
        </div>
      </div>
      <div className="component">
        <div className="title-box">
          <Typography fontWeight='bold'>With respect to the Appellate Public Prosecutor, the delay is one month:</Typography>
        </div>
        <div className="text-box">
          <Typography variant="body2">As of the date of issuance of the judgment.</Typography>
        </div>
      </div>
      <div className="component">
        <div className="title-box">
          <Typography fontWeight='bold'>With respect to the Appellate Public Prosecution, the delay is two months:</Typography>
        </div>
        <div className="text-box">
          <Typography variant="body2">As of the date of issuance of the judgment.</Typography>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Judgment;