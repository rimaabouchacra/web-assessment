// import React from 'react';
// import './index.css';
// import Typography from '@mui/material/Typography';

// const Header = () => {
//   return (
//     <div className="header-section">
//       <div className="background-image">
//         <div className="text">
//             <Typography variant="h3">
//               Criminal Court of Appeal
//            </Typography><br />
//            <Typography name='body1'>
//               A Comprehensive Guide to the Role and Functions of <br /> the Criminal Court of Appeal.
//            </Typography><br />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;

import React from 'react';
import { useTranslation } from 'react-i18next';
import './index.css';
import Typography from '@mui/material/Typography';

const Header = () => {
  const { t, i18n } = useTranslation();

  // Determine the language based on the current path
  const language = i18n.language; // Get the currently selected language

  return (
    <div className="header-section">
      <div className="background-image">
        <div className="text">
          <Typography variant="h3">
            {language === 'en' ? t('header.title') : t('header.title_ar')}
          </Typography><br />
          <Typography variant="body1">
            {language === 'en' ? t('header.subtitle') : t('header.subtitle_ar')}
          </Typography><br />
        </div>
      </div>
    </div>
  );
};

export default Header;





