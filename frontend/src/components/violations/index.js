import React from 'react';
import Typography from '@mui/material/Typography';
import balance from '../../images/balance.jpg'
import Box from '@mui/material/Box';
import search from '../../images/search.png'
import './index.css';

const Violation = () => {
  return (

    <div id='violations-section' className='violation'>
        <div className='title'>
            <Typography variant="h3">
              Violations
            </Typography><br />
        </div><br />
        <div className="search-item">
        <img src={search} alt="arrow" className="icon-search" />
        <Typography variant="body1">
          The Court of Appeal considers the appeal of the judgments issued by the Criminal Single Judge in the <br /> cases of violations, provided that they shall be on:
        </Typography>
      </div><br />
        <div className='content-img' >
            <div> 

             <div className='container'>
               <div className='boxx'>
                 <div className='circle'>1</div>
                   <Box className='bold'>
                     <Typography variant="body2" component="div" fontWeight="bold">
                      Imprisonment, preventive detention or a fine of more than five hundred thousand Lebanese pounds.
                     </Typography>
                  </Box>
                 </div>
             </div>

             <div className='container'>
               <div className='boxx'>
                 <div className='circle'>2</div>
                   <Box>
                    <Typography variant="body2" component="div" fontWeight="bold">
                     Additional or secondary penalty or personal compensations of more than five hundred thousand Lebanese pounds.
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

            <img className='balance' src={balance} alt="" />


        </div>
        
      
    </div>
  
  );
};

export default Violation;
