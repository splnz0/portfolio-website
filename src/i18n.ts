import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import germanTranslation from "./locales/de/german.json"
import englishTranslation from "./locales/en/english.json"

i18n
    .use(initReactI18next) 
    .use(LanguageDetector)
    .init({
    resources:{
        en:englishTranslation,
        de:germanTranslation
    },
    fallbackLng:"en",
    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;