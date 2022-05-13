import Api from '@/libraries/Api.js';
import Vue from "vue";
const resource_csrf_cookies  = '/sanctum/csrf-cookie';
const resource = '/api';

const state = () => ({
    user: null
});


// Actions
const actions = {
    /**
     * Send user's login information.
     *
     * @param      {Object}  context.commit    The commit
     * @param      {string}  payload.email     The email
     * @param      {string}  payload.password  The password
     *
     * @return     {Promise}
     */
    login: (context, { email, password }) => {
        return new Promise((resolve, reject) => {
            Api.get(resource_csrf_cookies).then(() => {
                Api.post(`${resource}/login`,  {
                        "email": email,
                        "password": password
                    }
                )
                    .then(response => {
                        context.commit('SET_AUTH_USER', response);
                        resolve(response);
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        });
    },
    /**
     * Logout user.
     *
     * @param      {Object}  context.commit    The commit
     *
     * @return     {Promise}
     */
    logout: (context) => {
        return new Promise((resolve, reject) => {
            Api.post(`${resource}/logout`)
                .then((response) => {
                    context.commit('REMOVE_AUTH_USER');
                    Vue.prototype.$session.destroy();
                    resolve(response);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    },
};

// Mutations
const mutations = {
    ['SET_AUTH_USER']: (state, payload) => {
        state.user = payload.data.user;
    },
    ['REMOVE_AUTH_USER']: (state) => {
        state.user = null;
    }
};

// Export module
export default {
    namespaced: true,
    state,
    actions,
    mutations
};