// import React from 'react';
// import Typography from '@mui/material/Typography';
// import './index.css'

// const Footer = () => {
  
//   return (
//     <footer className='footer'>
//       <Typography variant="body2">
//         &copy; {new Date().getFullYear()} Criminal Court of Appeal. All Rights Reserved.
//       </Typography>
//     </footer>
//   );
// };

// export default Footer;
import React from 'react';
import Typography from '@mui/material/Typography';
import './index.css';
import { useTranslation } from 'react-i18next'; // Import useTranslation

const Footer = () => {
  const { t } = useTranslation(); // Use the t function for translations

  return (
    <footer className='footer'>
      <Typography variant="body2">
        {t('footer.copyright', { year: new Date().getFullYear() })}
      </Typography>
    </footer>
  );
};

export default Footer;