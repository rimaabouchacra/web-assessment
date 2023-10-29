import React from 'react';
import Typography from '@mui/material/Typography';
import './index.css';
import { useTranslation } from 'react-i18next'; 

const Footer = () => {
  const { t } = useTranslation(); 

  return (
    <footer className='footer'>
      <Typography variant="body2">
        {t('footer.copyright', { year: new Date().getFullYear() })}
      </Typography>
    </footer>
  );
};

export default Footer;