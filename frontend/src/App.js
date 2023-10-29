import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './App.css';
import MainEn from './pages/main_en';
import MainAr from './pages/main_ar';

function App() {
  const { t } = useTranslation();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainEn />} />
        <Route path="/ar" element={<MainAr />} />
      </Routes>
    </Router>
  );
}

export default App;



