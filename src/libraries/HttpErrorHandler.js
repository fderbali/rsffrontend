import Vue         from 'vue';
import router      from './VueRouter.js';
import HttpStatus  from 'http-status-codes';
import Alert       from './Alert.js';

// A waiting time before redirecting
const waitingTime = 50;

export default {
    /**
     * Check http errors
     *
     * @param     {object}     error      the api error response
     */
    checkHttpErrors (error) {
        switch (error.response.status) {
            case HttpStatus.UNAUTHORIZED:
                // IF we are in login page
                if (router.currentRoute.name === 'login') {
                    if (error.response.config.method === 'post') {
                        Alert.fail(this.$i18n.t('msg-err3'));   //Ces identifiants ne correspondent pas à nos enregistrements.
                    }
                    break;
                }

                /**
                 * If session expired
                 * Clear session (deprecated) and local storage (vuex state)
                 */
                Vue.prototype.$session.destroy();

                // Redirect to login
                setTimeout(() => {
                    router.push({
                        name: 'login'
                    });
                }, waitingTime);
                break;
            default:
                Alert.fail(error.response.message);
                break;
        }
    }
};