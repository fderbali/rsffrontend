import Home from './components/Home.vue';
import Login from './components/auth/Login.vue';
import NotFound from './components/NotFound.vue';

export default [
    {
        path: '/connexion',
        name: 'login',
        component: Login,
        meta: {
            title: "Authentification"
        }
    },
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            title: "Accueil"
        }
    },
    {
        path: '/:pathMatch(.*)*',
        name: `not-found`,
        component: NotFound,
        meta: {
            title: 'Page introuvable'
        }
    }
];