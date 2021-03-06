import Api from '@/libraries/Api.js';
const resource = '/api/order';

const state = () => ({
    order: null,
    orders: null
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
    },
    getOrder(context, {order_id}){
        return new Promise((resolve, reject) => {
            Api.get(`${resource}/${order_id}`).then((response) => {
                context.commit('SET_ORDER', response);
                resolve(response);
            })
                .catch((error) => {
                    reject(error);
                });
        });
    },
    getOrders(context){
        return new Promise((resolve, reject) => {
            Api.get(`${resource}s/prof`).then((response) => {
                context.commit('SET_ORDERS', response);
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
    ['SET_ORDER']: (state, payload) => {
        state.order = payload.data;
    },
    ['SET_ORDERS']: (state, payload) => {
        state.orders = payload.data;
    },
};

// Export module
export default {
    namespaced: true,
    state,
    actions,
    mutations
};