import Vue       from 'vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter);
import Routes from '../routes.js';

// Create the router
const router = new VueRouter({
    mode:   'history',
    base:   process.env.VUE_APP_BASE_URL,
    routes: Routes
});

//Before each redirection check if an authenticated admin exists.
/*router.beforeEach((to, from, next) => {
    if (!Vue.prototype.$session.exists() && to.name !== 'connexion') {
        next({ name: 'connexion' });
    }
});*/

export default router;