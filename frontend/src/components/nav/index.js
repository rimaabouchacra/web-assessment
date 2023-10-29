import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../../images/logo.png';
import './index.css';

const Navbar = () => {
  
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const changeLanguage = (lng) => {
    if (lng === 'en') {
      i18n.changeLanguage('en');
      navigate('/');
    } else {
      i18n.changeLanguage('ar');
      navigate('/ar');
    }
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar className='nav'>
          <img src={logo} alt="Logo" style={{ height: 80, marginRight: 20 }} />
          <Box sx={{ flexGrow: 1 }} />
          <Button component={Link} to={i18n.language === 'en' ? '/' : '/ar'} color="inherit">
            <Box>
              {i18n.language === 'en' ? t('navbar.english') : t('navbar.arabic')}
            </Box>
          </Button>
          <Button
            onClick={() => changeLanguage(i18n.language === 'en' ? 'ar' : 'en')}
            color="inherit"
          >
            <Box>
              {i18n.language === 'en' ? t('navbar.arabic') : t('navbar.english')}
            </Box>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
