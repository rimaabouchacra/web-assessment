import React from 'react';
import { useTranslation } from 'react-i18next';
import Definition from '../../components/definition';
import Footer from '../../components/footer';
import Header from '../../components/header';
import Judgment from '../../components/judgments';
import Jurisdiction from '../../components/jurisdiction';
import MenuBar from '../../components/menu';
import Navbar from '../../components/nav';
import Violation from '../../components/violations';

const MainAr = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Navbar activePage={t('navbar.arabic')} />
      <Header/>
      <MenuBar />
      <Definition />
      <Jurisdiction />
      <Violation />
      <Judgment />
      <Footer />
    </div>
  );
};

export default MainAr;
