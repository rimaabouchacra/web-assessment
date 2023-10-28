import React from 'react';
import Typography from '@mui/material/Typography';
import balance from '../../images/balance.jpg'
import search from '../../images/search.png'
import Box from '@mui/material/Box';
import './index.css'; 
import { useTranslation } from 'react-i18next';

const Violation = () => {
  const { t } = useTranslation();

  return (
    <div id='violations-section' className='violation'>
      <div className='title'>
        <Typography variant="h3">{t('violation.title')}</Typography><br />
      </div><br />
      <div className="search-item">
        <img src={search} alt="arrow" className="icon-search" />
        <Typography variant="body1">
          {t('violation.text1')}
        </Typography>
      </div><br />
      <div className='content-img'>
        <div>
          <div className='container'>
            <div className='boxx'>
              <div className='circle'>1</div>
              <Box className='bold'>
                <Typography variant="body2" component="div" fontWeight="bold">
                  {t('violation.item1')}
                </Typography>
              </Box>
            </div>
          </div>

          <div className='container'>
            <div className='boxx'>
              <div className='circle'>2</div>
              <Box>
                <Typography variant="body2" component="div" fontWeight="bold">
                  {t('violation.item2')}
                </Typography>
              </Box>
            </div>
          </div>

          <div className='container'>
            <div className='boxx'>
              <div className='circle'>3</div>
              <Box>
                <Typography variant="body2" component="div" fontWeight="bold">
                  {t('violation.item3')}
                </Typography>
              </Box>
            </div>
          </div>

          <div className='container'>
            <div className='boxx'>
              <div className='circle'>4</div>
              <Box>
                <Typography variant="body2" component="div" fontWeight="bold">
                  {t('violation.item4')}
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
