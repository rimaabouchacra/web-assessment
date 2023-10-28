// import React from 'react';
// import Typography from '@mui/material/Typography';
// import icon1 from '../../images/icon1.png';
// import icon2 from '../../images/icon2.png';
// import icon3 from '../../images/icon3.png';
// import icon4 from '../../images/icon4.png';
// import './index.css';
// import { Link as ScrollLink } from 'react-scroll';

// const MenuBar = () => {
//   return (
//     <div className="menu-bar">
//       <ScrollLink to="definition-section" spy={true} smooth={true} duration={500} offset={-50}>
//         <div className="tab">
//           <img src={icon1} alt="arrow" className="icon" />
//           <Typography variant="body1">Definition</Typography>
//         </div>
//       </ScrollLink>
//       <ScrollLink to="jurisdiction-section" spy={true} smooth={true} duration={500} offset={-50}>
//         <div className="tab">
//           <img src={icon2} alt="arrow" className="icon" />
//           <Typography variant="body1">Jurisdiction</Typography>
//         </div>
//       </ScrollLink>
//       <ScrollLink to="violations-section" spy={true} smooth={true} duration={500} offset={-50}>
//         <div className="tab">
//           <img src={icon4} alt="arrow" className="icon" />
//           <Typography variant="body1">Violations</Typography>
//         </div>
//       </ScrollLink>
//       <ScrollLink to="judgments-section" spy={true} smooth={true} duration={500} offset={-50}>
//         <div className="tab">
//           <img src={icon3} alt="arrow" className="icon" />
//           <Typography variant="body1">Judgments</Typography>
//         </div>
//       </ScrollLink>
//     </div>
//   );
// };

// export default MenuBar;




import React from 'react';
import Typography from '@mui/material/Typography';
import icon1 from '../../images/icon1.png';
import icon2 from '../../images/icon2.png';
import icon3 from '../../images/icon3.png';
import icon4 from '../../images/icon4.png';
import './index.css';
import { Link as ScrollLink } from 'react-scroll';
import { useTranslation } from 'react-i18next'; // Import useTranslation

const MenuBar = () => {
  const { t } = useTranslation(); // Use the t function for translations

  return (
    <div className="menu-bar">
      <ScrollLink to="definition-section" spy={true} smooth={true} duration={500} offset={-50}>
        <div className="tab">
          <img src={icon1} alt="arrow" className="icon" />
          <Typography variant="body1">{t('menu.definition')}</Typography> 
        </div>
      </ScrollLink>
      <ScrollLink to="jurisdiction-section" spy={true} smooth={true} duration={500} offset={-50}>
        <div className="tab">
          <img src={icon2} alt="arrow" className="icon" />
          <Typography variant="body1">{t('menu.jurisdiction')}</Typography> 
        </div>
      </ScrollLink>
      <ScrollLink to="violations-section" spy={true} smooth={true} duration={500} offset={-50}>
        <div className="tab">
          <img src={icon4} alt="arrow" className="icon" />
          <Typography variant="body1">{t('menu.violations')}</Typography> 
        </div>
      </ScrollLink>
      <ScrollLink to="judgments-section" spy={true} smooth={true} duration={500} offset={-50}>
        <div className="tab">
          <img src={icon3} alt="arrow" className="icon" />
          <Typography variant="body1">{t('menu.judgments')}</Typography> 
        </div>
      </ScrollLink>
    </div>
  );
};

export default MenuBar;



