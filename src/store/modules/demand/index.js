import Api from '@/libraries/Api.js';
const resource = '/api/demand';

const state = () => ({
    demands: null
});


// Actions
const actions = {
    envoyerDemand: (context, payload) => {
        return new Promise((resolve, reject) => {
            Api.post(`${resource}/create`, payload).then((response) => {
                context.commit('ADD_DEMAND', response);
                resolve(response);
            })
                .catch((error) => {
                    reject(error);
                });
        });
    },
    getSentDemandsByUser(context, user_id) {
        return new Promise((resolve, reject) => {
            Api.get(`${resource}/user/${user_id}`).then((response) => {
                context.commit('SET_DEMANDS', response);
                resolve(response);
            })
                .catch((error) => {
                    reject(error);
                });
        });
    }
};

// Mutations
const mutations = {
    ['ADD_DEMAND']: (state, payload) => {
        state.demands.push(payload.data);
    },
    ['SET_DEMANDS']: (state, payload) => {
        state.demands = (payload.data);
    }
};

// Export module
export default {
    namespaced: true,
    state,
    actions,
    mutations
};