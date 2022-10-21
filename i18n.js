import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./src/traductions/en.json";
import translationCAST from "./src/traductions/cast.json";
import translationCAT from "./src/traductions/cat.json";

// the translations
const resources = {
  en: {
    translation: translationEN,
  },
  cast: {
    translation: translationCAST,
  },
  cat: {
    translation: translationCAT,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    compatibilityJSON: "v3",
    resources,
    lng: "en",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
