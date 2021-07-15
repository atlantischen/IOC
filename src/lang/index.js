import zh from './zh'
import en from './en'
import { createI18n } from 'vue-i18n';
const messages = {
    zh: {
        ...zh
    },
    en: {
        ...en
    },
}
export function getLanguage() {
    return localStorage.getItem('language') || 'zh'
}
const i18n = createI18n({
    // legacy: false,
    // globalInjection: true,
    locale: getLanguage(),
    messages
});

export default i18n;