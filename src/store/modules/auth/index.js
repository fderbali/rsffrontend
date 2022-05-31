import Api from '@/libraries/Api.js';
import Vue from "vue";
const resource_csrf_cookies  = '/sanctum/csrf-cookie';
const resource = '/api';

const state = () => ({
    user: null,
    isAdmin: false
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
                .catch((errors) => {
                    reject(errors);
                }).finally(()=>{
                    Vue.prototype.$session.destroy();
                    context.commit('REMOVE_AUTH_USER');
                });
        });
    },
    register(context, usager){
        return new Promise((resolve, reject)=>{
            Api.post(`${resource}/user/create`, usager)
                .then((response) => {
                    resolve(response);
                })
                .catch((error) => {
                    reject(error);
                })
        })
    }
};

// Mutations
const mutations = {
    ['SET_AUTH_USER']: (state, payload) => {
        state.user = payload.data.user;
        localStorage.setItem("jwt", payload.data.jwt);
        if(Array.isArray(payload.data.user.roles) && payload.data.user.roles.length > 0){
            if(payload.data.user.roles[0].name == 'admin') {
                state.isAdmin = true;
            }
        }
    },
    ['REMOVE_AUTH_USER']: (state) => {
        state.user = null;
        state.isAdmin = false;
        localStorage.removeItem("jwt");
    }
};

// Export module
export default {
    namespaced: true,
    state,
    actions,
    mutations
};