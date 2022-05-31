import Api from '@/libraries/Api.js';
const resource = '/api/category';

const state = () => ({
    categories: null
});


// Actions
const actions = {
    saveCategory(context, {category}){
        return new Promise((resolve, reject) => {
            Api.post(`${resource}/create`, {
                'title': category
            }).then((response) => {
                resolve(response);
            })
                .catch((error) => {
                    reject(error);
                });
        });
    },
    getCategories: (context) => {
        return new Promise((resolve, reject) => {
            Api.get(resource).then((response) => {
                context.commit('SET_CATEGORIES', response);
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
    ['SET_CATEGORIES']: (state, payload) => {
        state.categories = payload.data;
    }
};

// Export module
export default {
    namespaced: true,
    state,
    actions,
    mutations
};