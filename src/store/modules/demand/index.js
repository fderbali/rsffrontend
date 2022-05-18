import Api from '@/libraries/Api.js';
const resource = '/api/demand';

const state = () => ({
    demands: null,
    received_demands: null
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
    },
    getDemandsByTeacher(context, user_id){
        return new Promise((resolve, reject) => {
            Api.get(`${resource}/recu/${user_id}`).then((response) => {
                context.commit('SET_DEMANDS_RECEIVED', response);
                resolve(response);
            })
                .catch((error) => {
                    reject(error);
                });
        });
    },
    updateDemand(context, {id, training_id, user_id, decision}){
        return new Promise((resolve, reject) => {
            Api.put(`${resource}/${id}`, {
                'training_id': training_id,
                'user_id': user_id,
                'status':(decision ? 'confirmed' : 'cancelled')
            }).then((response) => {
                context.commit('SET_DEMANDS_STATUS', response);
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
        state.demands = payload.data;
    },
    ['SET_DEMANDS_RECEIVED']: (state, payload) => {
        state.received_demands = payload.data;
    },
    ['SET_DEMANDS_STATUS']: (state, payload) => {
        state.received_demands = state.received_demands.map(obj => {
            if(obj.id === payload.data.id){
                return payload.data
            }
            return obj
        });
    }
};

// Export module
export default {
    namespaced: true,
    state,
    actions,
    mutations
};