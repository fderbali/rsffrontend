import Api from '@/libraries/Api.js';
const resource = '/api/training';

const state = () => ({
    trainings: null,
    trainingsLinks: null
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
        const formData = new FormData();
        formData.append('thumbnail', formTraining.thumbnail);
        formData.append('title', formTraining.titre);
        formData.append('description', formTraining.description);
        formData.append('level', formTraining.niveau);
        formData.append('location', formTraining.domicile ? "domicile" : formTraining.adresse);
        formData.append('user_id', formTraining.user_id);
        formData.append('category_id', formTraining.categorie);
        formData.append('total_duration', formTraining.duree);
        return new Promise((resolve, reject) => {
            Api.post(`${resource}/create`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then((response) => {
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
        // Remove last and first element to get rid of previous and next links
        let links = payload.data.links;
        links.shift();
        links.splice(-1);
        state.trainingsLinks = links;
    }
};

// Export module
export default {
    namespaced: true,
    state,
    actions,
    mutations
};