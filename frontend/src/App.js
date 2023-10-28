// import React, { useState } from 'react';
// import {Navigate} from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import './App.css';
// import Main from './pages/main_en';

// function App() {
  
//   return (
//     <Router>
//       <Routes>
//           <Route path="/" element={<Main/>} />
          
//       </Routes>  
//     </Router> 

//   );
// }


// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation, initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import './App.css';
import MainEn from './pages/main_en';
import MainAr from './pages/main_ar';

import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: require('./locales/en/translation.json'),
  },
  ar: {
    translation: require('./locales/ar/translation.json'),
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });

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






