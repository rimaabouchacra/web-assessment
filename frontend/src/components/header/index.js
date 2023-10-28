import React from 'react';
import { useTranslation } from 'react-i18next';
import './index.css';
import Typography from '@mui/material/Typography';

const Header = () => {
  const { t, i18n } = useTranslation();

  const language = i18n.language; 

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





