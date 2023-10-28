// import React from 'react';
// import header from '../../images/header.png'
// import './index.css'
// const Header = () => {
// return(

//     <div className='header-section'>
//         <img className='headerr' src={header} alt="header" />
//     </div>
// )
// }
// export default Header
import React from 'react';
import './index.css';
import Typography from '@mui/material/Typography';

const Header = () => {
  return (
    <div className="header-section">
      <div className="background-image">
        <div className="text">
            <Typography variant="h3">
              Criminal Court of Appeal
           </Typography><br />
           <Typography name='body1'>
              A Comprehensive Guide to the Role and Functions of <br /> the Criminal Court of Appeal
           </Typography><br />
        </div>
      </div>
    </div>
  );
};

export default Header;
