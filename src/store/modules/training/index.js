import Api from '@/libraries/Api.js';
const resource = '/api/training';

const state = () => ({
    trainings: null
});


// Actions
const actions = {
    getTrainings: (context) => {
        return new Promise((resolve, reject) => {
            Api.get(resource).then((response) => {
                context.commit('SET_TRAININGS', response);
                resolve(response);
            })
                .catch((error) => {
                    reject(error);
                });
        });
    },
    saveTraining: (context, formTraining) => {
        console.log(formTraining)
        return new Promise((resolve, reject) => {
            Api.post(`${resource}/create`, {
                "title": formTraining.titre,
                "description": formTraining.description,
                "thumbnail": "xxxxxxxxxxxxxx",
                "level": formTraining.niveau,
                "location": formTraining.domicile ? "domicile" : formTraining.adresse,
                "user_id":formTraining.user_id,
                "category_id": formTraining.categorie,
                "total_duration": formTraining.duree
            }).then((response) => {
                console.log(response);
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
    ['SET_TRAININGS']: (state, payload) => {
        state.trainings = payload.data.data;
    },
};

// Export module
export default {
    namespaced: true,
    state,
    actions,
    mutations
};