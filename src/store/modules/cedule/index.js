import Api from '@/libraries/Api.js';
const resourceProf = '/api/cedule/prof';
//const resourceUser = '/api/cedule/user';

const state = () => ({
    sessionsByProf: null,
    sessionsByUser: null
});

// Actions
const actions = {
    getSessionsByProf(context){
        return new Promise((resolve, reject) => {
            Api.get(`${resourceProf}`).then((response) => {
                context.commit('SET_CEDULE_PROF', response);
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
    ['SET_CEDULE_PROF']: (state, payload) => {
        state.sessionsByProf = payload.data;
    }
};

// Export module
export default {
    namespaced: true,
    state,
    actions,
    mutations
};