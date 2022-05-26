import Api from '@/libraries/Api.js';
const resource = '/api/session';

const state = () => ({
    sessions: null,
});

// Actions
const actions = {
    saveSeance(context, {training_id, start, end, user_id}){
        return new Promise((resolve, reject) => {
            Api.post(`${resource}/create`, {
                'training_id': training_id,
                'start': start,
                'end': end,
                'user_id': user_id
            }).then((response) => {
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

};

// Export module
export default {
    namespaced: true,
    state,
    actions,
    mutations
};