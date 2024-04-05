import english from '../i18n/en.json';
import spanish from '../i18n/es.json';
import catalan from '../i18n/ca.json';
import dutch from '../i18n/nl.json';

const LANGUAGES = {
    ENGLISH: 'en',
    SPANISH: 'es',
    CATALAN: 'ca',
    DUTCH: 'nl',
};
export const getI18N = ({ currentLocale = 'en' }: { currentLocale: string | undefined }) => {
    if (currentLocale === LANGUAGES.ENGLISH) return english;
    if (currentLocale === LANGUAGES.SPANISH) return spanish;
    if (currentLocale === LANGUAGES.CATALAN) return catalan;
    if (currentLocale === LANGUAGES.DUTCH) return dutch;
    return english;
};
