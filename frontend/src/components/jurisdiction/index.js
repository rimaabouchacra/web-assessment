import React from 'react';
import Typography from '@mui/material/Typography';
import './index.css';
import { useTranslation } from 'react-i18next'; 

const Jurisdiction = () => {
  const { t } = useTranslation(); 

  return (
    <div id='jurisdiction-section'>
      <div className='title'>
        <Typography variant="h3">{t('jurisdiction.title')}</Typography>
      </div>

      <div className="jurisdiction-section">
        <div className="bordered-section">
          <Typography variant="body1">
            {t('jurisdiction.text1')}
            <br />
            {t('jurisdiction.text2')}
            <br />
            <strong>{t('jurisdiction.exception')}</strong>
          </Typography>
          <br />
          <div className="box-container">
            <div className="box">
              <Typography variant="body2">
                {t('jurisdiction.exception1')}
              </Typography>
            </div>
            <div className="box">
              <Typography variant="body2">
                {t('jurisdiction.exception2')}
              </Typography>
            </div>
            <div className="box">
              <Typography variant="body2">
                {t('jurisdiction.exception3')}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jurisdiction;
