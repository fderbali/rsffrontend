import Api from '@/libraries/Api.js';
const resource = '/api/estimate';

const state = () => ({
    estimates: null,
    received_estimates: null
});


// Actions
const actions = {
    getListEstimatesByUser(context, user_id) {
        return new Promise((resolve, reject) => {
            Api.get(`${resource}/user/${user_id}`).then((response) => {
                context.commit('SET_ESTIMATES', response);
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
    ['SET_ESTIMATES']: (state, payload) => {
        state.estimates = payload.data;
    }
};

// Export module
export default {
    namespaced: true,
    state,
    actions,
    mutations
};