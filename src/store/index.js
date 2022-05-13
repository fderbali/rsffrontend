import Vue             from 'vue';
import Vuex            from 'vuex';
import VuexPersistence from 'vuex-persist';

Vue.use(Vuex);

// Store the state in the local storage
const vuexLocal = new VuexPersistence({
    strictMode: process.env.NODE_ENV !== 'production',
    storage:    window.localStorage
});

function loadFiles (path) {
    // Load modules
    const modulesContext = path;
    const modules        = {};
    modulesContext.keys().forEach((file) => {
        // Build the module name from the path
        const moduleName = file.replace(/(\.\/|\/index.js)/g, '');

        // Register file context under module name
        modules[moduleName] = modulesContext(file).default || modulesContext(file);
    });
    return modules;
}

let coreModules = loadFiles(require.context('./modules', true, /index.js/));

export default new Vuex.Store({
    modules: {
        core: {
            namespaced: true,
            modules:    coreModules
        }
    },
    strict:    process.env.NODE_ENV !== 'production',
    mutations: {
        RESTORE_MUTATION: vuexLocal.RESTORE_MUTATION
    },
    plugins: [
        vuexLocal.plugin
    ]
});