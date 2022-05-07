import Vue     from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

function loadLocaleMessages () {
    // Load the languages files
    const locales  = require.context('../locales', true, /[A-Za-z0-9-_,\s]+\.json$/i);

    // Generate the messages object
    const messages = {};
    locales.keys().forEach(key => {
        const matched = key.match(/([A-Za-z0-9-_]*)\./ig);
        if (matched && matched.length > 1) {
            // Get the locale
            const locale = matched[1].replace('.', '');

            // Check for module
            if (typeof matched[2] !== 'undefined') {
                if (typeof messages[locale] === 'undefined') {
                    messages[locale] = {};
                }

                const module = matched[2].replace('.', '');
                messages[locale][module] = locales(key);
            } else {
                messages[locale] = locales(key);
            }
        }
    });

    return messages;
}

export default new VueI18n({
    locale:              localStorage.getItem('locale') || process.env.VUE_APP_I18N_DEFAULT_LOCALE || 'fr',
    fallbackLocale:      process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'fr',
    messages:            loadLocaleMessages(),
    silentFallbackWarn:  true,
    escapeParameterHtml: true
});
console.log(localStorage.getItem('locale'));