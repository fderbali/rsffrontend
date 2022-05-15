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
    }
};

// Mutations
const mutations = {
    ['ADD_DEMAND']: (state, payload) => {
        console.log(payload.data);
        state.demands.push(payload.data);
        console.log(state.demands);
    }
};

// Export module
export default {
    namespaced: true,
    state,
    actions,
    mutations
};