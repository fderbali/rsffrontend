import Api from '@/libraries/Api.js';
const resource = '/api/training';

const state = () => ({
    trainings:     null
});


// Actions
const actions = {
    getTrainings: () => {
        return new Promise((resolve, reject) => {
            Api.get(resource).then((response) => {
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

};

// Export module
export default {
    namespaced: true,
    state,
    actions,
    mutations
};