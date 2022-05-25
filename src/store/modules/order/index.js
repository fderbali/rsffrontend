import Api from '@/libraries/Api.js';
const resource = '/api/order';

const state = () => ({
    order: null,
});


// Actions
const actions = {
    saveOrder(context, {training_id, estimate_id, price, status}){
        return new Promise((resolve, reject) => {
            Api.post(resource, {
                'training_id': training_id,
                'estimate_id': estimate_id,
                'price': price,
                'status': status
            }).then((response) => {
                context.commit('SET_ORDER', response);
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
    ['SET_ORDER']: (state, payload) => {
        state.order = payload.data;
    },
};

// Export module
export default {
    namespaced: true,
    state,
    actions,
    mutations
};