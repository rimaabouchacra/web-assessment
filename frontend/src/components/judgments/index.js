import React from 'react';
import Typography from '@mui/material/Typography';
import note from '../../images/note.png';
import quote from '../../images/quote.png';
import './index.css';
import clock from '../../images/clock.png';
import { useTranslation } from 'react-i18next'; 

const Judgment = () => {
  const { t } = useTranslation(); 

  return (
    <div id='judgments-section' className='title'>
      <Typography variant="h3">
        {t('judgment.title')}
      </Typography><br />

      <div className="search-item">
        <img src={note} alt="icon" className="icon-note" />
        <Typography variant="body1">
          {t('judgment.note')}
        </Typography>
      </div><br />

      <div className="search-item">
        <img src={clock} alt="icon" className="icon-note clock" />
        <Typography fontWeight='bold' classes={{ root: 'custom-typography' }}>
          {t('judgment.delayAppeal')}
        </Typography>
      </div><br />

      <div className="search-item">
        <img src={quote} alt="icon" className="icon-quote" />
        <Typography variant="h5" fontWeight='bold'>
          {t('judgment.finalJudgments')}
        </Typography>
      </div><br />

      <div className="row">
        <div className="component">
          <div className="title-box">
            <Typography fontWeight='bold'>
              {t('judgment.delayPlaintiffDefendant')}
            </Typography>
          </div>
          <div className="text-box">
            <Typography variant="body2">
              {t('judgment.delayPlaintiffDefendantDetails')}
            </Typography>
          </div>
        </div>
        <div className="component">
          <div className="title-box">
            <Typography fontWeight='bold'>
              {t('judgment.delayAppellateProsecutor')}
            </Typography>
          </div>
          <div className="text-box">
            <Typography variant="body2">
              {t('judgment.delayAppellateProsecutorDetails')}
            </Typography>
          </div>
        </div>
        <div className="component">
          <div className="title-box">
            <Typography fontWeight='bold'>
              {t('judgment.delayAppellateProsecution')}
            </Typography>
          </div>
          <div className="text-box">
            <Typography variant="body2">
              {t('judgment.delayAppellateProsecutionDetails')}
            </Typography>
          </div>
        </div>
      </div><br />

      <div className="search-item">
        <img src={quote} alt="icon" className="icon-quote" />
        <Typography variant="h5" fontWeight='bold'>
          {t('judgment.decisionDefenses')}
        </Typography>
      </div><br />

      <div className='lawyer'>
        <Typography variant="body1" fontWeight='bold'>
          {t('judgment.appealLawyer')}
        </Typography>
      </div>
      <div className='decision'>
        <div className="component1">
          <h3>{t('judgment.delayPublicProsecution')}</h3>
          <div className="content1">{t('judgment.delayPublicProsecutionDetails')}</div>
        </div>
        <div className="component1">
          <h3>{t('judgment.delayOpponents')}</h3>
          <div className="content1">{t('judgment.delayOpponentsDetails')}</div>
        </div>
      </div>

      <div className="centered-container">
        <div className="option">
          <Typography variant="body1" fontWeight='bold'>
            {t('judgment.decisionCourtAppeal')}
          </Typography>
        </div><br />
        <div className="options">
          <div className="option1">
            <Typography variant="body1">{t('judgment.dissolution')}</Typography>
          </div><br />
          <div className="option1">
            <Typography variant="body1">{t('judgment.legalization')}</Typography>
          </div><br />
        </div>
      </div>
    </div>
  );
};

export default Judgment;
