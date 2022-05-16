import Home from '@/components/Home.vue';
import Login from '@/components/auth/Login.vue';
import Register from '@/components/auth/Register.vue';
import NotFound from '@/components/NotFound.vue';
import FormTraining from "@/components/form-training";
import listDemands from "@/components/Lists/listDemands";

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
            title: "Enregistrement"
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
        path: '/form-trainings',
        name: 'form-trainings',
        component: FormTraining,
        meta: {
            title: "Form formations"
        }
    },
    {
        path: '/sent-demands',
        name: 'sentDemands',
        component: listDemands,
        meta: {
            title: "Liste des demandes"
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