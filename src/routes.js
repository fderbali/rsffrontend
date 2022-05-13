import Home from '@/components/Home.vue';
import Login from '@/components/auth/Login.vue';
import Register from '@/components/auth/Register.vue';
import NotFound from '@/components/NotFound.vue';
import Trainings from "@/components/Trainings";
import FormTraining from "@/components/form-training";

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
        path: '/inscription',
        name: 'signup',
        component: Register,
        meta: {
            title: "Sign up"
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
        path: '/trainings',
        name: 'trainings',
        component: Trainings,
        meta: {
            title: "Formations"
        }
    },
    {
        path: '/form-trainings',
        name: 'form-trainings',
        component: FormTraining,
        meta: {
            title: "Form formations"
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