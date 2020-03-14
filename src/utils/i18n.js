import i18n from 'react-native-i18n';
import en from './lang/en.js';
import vi from './lang/vi.js';
import * as RNLocalize from 'react-native-localize';

// const locales = RNLocalize.getLocales();


// if (Array.isArray(locales)) {
//   i18n.locale = locales[0].languageTag;
// }
i18n.fallbacks = true;

i18n.translations = {
  en,
  vi
};

export default i18n;