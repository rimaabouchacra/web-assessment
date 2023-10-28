import React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import './index.css';

const Violation = () => {
  return (

    <div id='violation-section'>
        <div className='title'>
            <Typography variant="h3">
              Violations
            </Typography><br />
        </div><br />
        <div className='container'>
          <div className='boxx'>
             <div className='circle'>1</div>
             <Box>
               <Typography variant="body2" component="div" className='textt'>
                Imprisonment, preventive detention or a fine of more than five hundred thousand Lebanese pounds.
               </Typography>
             </Box>
          </div>
        </div>


        <div className='container'>
          <div className='boxx'>
             <div className='circle'>2</div>
             <Box>
               <Typography variant="body2" component="div" className='textt'>
                Additional or secondary penalty or personalcompensationsof more than five hundred thousand Lebanese pounds.
               </Typography>
             </Box>
          </div>
        </div>   

        <div className='container'>
          <div className='boxx'>
             <div className='circle'>3</div>
             <Box>
               <Typography variant="body2" component="div" className='textt'>
                Revocation of defense stipulated in Article 73 of the Criminal Procedures Code.
               </Typography>
             </Box>
          </div>
        </div> 

        <div className='container'>
          <div className='boxx'>
             <div className='circle'>4</div>
             <Box>
               <Typography variant="body2" component="div" className='textt'>
                Penalty for a violation correlative with a misdemeanor.
               </Typography>
             </Box>
          </div>
        </div> 
      
    </div>
  
  );
};

export default Violation;
