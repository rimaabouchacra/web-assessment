import React from 'react';
import Typography from '@mui/material/Typography';
import icon from "../../images/arrow.png";
import './index.css';
import { useTranslation } from 'react-i18next'; 

const Definition = () => {
  const { t } = useTranslation(); 

  return (
    <div id='definition-section' className='def-text'>
      <Typography variant="h3">
        {t('definition.title')}
      </Typography><br />

      <div className="definition-item">
        <img src={icon} alt="arrow" className="icon" />
        <Typography variant="body1">
          {t('definition.item1')}
        </Typography>
      </div>

      <div className="definition-item">
        <img src={icon} alt="arrow" className="icon" />
        <Typography variant="body1">
          {t('definition.item2')}
        </Typography>
      </div>

      <div className="definition-item">
        <img src={icon} alt="arrow" className="icon" />
        <Typography variant="body1">
          {t('definition.item3')}
        </Typography>
      </div>
    </div>
  );
};

export default Definition;
