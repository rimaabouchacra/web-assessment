import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./locales/en/translation.json";
import translationAr from "./locales/ar/translation.json";


const resources = {
  en: {
    translation: translationEN,
  },
  ar: {
    translation: translationAr,
  },
};


i18n
  .use(initReactI18next)
  .init({
    resources,
    lng:"en", 
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;


