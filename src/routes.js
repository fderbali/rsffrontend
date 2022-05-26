import Home from '@/components/Home.vue';
import Login from '@/components/auth/Login.vue';
import Register from '@/components/auth/Register.vue';
import NotFound from '@/components/NotFound.vue';
import FormTraining from "@/components/form-training";
import formSession from "@/components/forms/form-session";
import listDemands from "@/components/Lists/listDemands";
import listReceivedDemands from "@/components/Lists/listReceivedDemands";
import listReceivedEstimates from "@/components/Lists/listReceivedEstimates";
import sentEstimates from "@/components/Lists/sentEstimates";
import checkout from "@/components/checkout";

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
        path: '/received-demands',
        name: 'receivedDemands',
        component: listReceivedDemands,
        meta: {
            title: "Liste des demandes reçues"
        }
    },
    {
        path: '/received-estimates',
        name: 'receivedEstimates',
        component: listReceivedEstimates,
        meta: {
            title: "Liste des devis reçus"
        }
    },
    {
        path: '/sent-estimates',
        name: 'sentEstimates',
        component: sentEstimates,
        meta: {
            title: "Liste des devis envoyés"
        }
    },
    {
        path: '/checkout',
        name: 'checkout',
        component: checkout,
        meta: {
            title: "Paiement"
        }
    },
    {
        path: '/form-session',
        name: 'form-session',
        component: formSession,
        meta: {
            title: "Form sessions"
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