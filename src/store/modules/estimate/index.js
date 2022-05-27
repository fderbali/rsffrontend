import Api from '@/libraries/Api.js';
const resource = '/api/estimate';

const state = () => ({
    estimates: null,
    received_estimates: null,
    sent_estimates: null,
    estimate: null
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
    },
    getListEstimatesProf(context, user_id) {
        return new Promise((resolve, reject) => {
            Api.get(`${resource}/sent/${user_id}`).then((response) => {
                context.commit('SET_ESTIMATES_SENT', response);
                resolve(response);
            })
                .catch((error) => {
                    reject(error);
                });
        });
    },
    getEstimate(context, estimate_id) {
        return new Promise((resolve, reject) => {
            Api.get(`${resource}/${estimate_id}`).then((response) => {
                context.commit('SET_ESTIMATE', response);
                resolve(response);
            })
                .catch((error) => {
                    reject(error);
                });
        });
    },
    cancelEstimate(context, estimate_id) {
        return new Promise((resolve, reject) => {
            Api.put(`${resource}/${estimate_id}`, {
                'status':'cancelled'
            }).then((response) => {
                //context.commit('SET_ESTIMATE_STATUS', response);
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
        state.received_estimates = payload.data;
    },
    ['SET_ESTIMATES_SENT']: (state, payload) => {
        state.sent_estimates = payload.data;
    },
    ['SET_ESTIMATE']: (state, payload) => {
        state.estimate = payload.data;
    },
    ['SET_ESTIMATE_STATUS']: (state, payload) => {
        state.received_estimates = state.received_estimates.map(obj => {
            if(obj.id === payload.data.id){
                return payload.data
            }
            return obj
        });
    },
};

// Export module
export default {
    namespaced: true,
    state,
    actions,
    mutations
};