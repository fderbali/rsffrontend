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
import ListOrderPerProf from "@/components/Lists/ListOrderPerProf";
import ceduleProf from "@/components/Cedules/ceduleProf";
import ceduleUser from "@/components/Cedules/ceduleUser";
import turnover from "@/components/admin/statistiques/turnover";
import statsCategories from "@/components/admin/statistiques/statsCategories";

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
        path: '/orders-per-prof',
        name: 'orders-per-prof',
        component: ListOrderPerProf,
        meta: {
            title: "Orders per prof"
        }
    },
    {
        path: '/cedule-per-prof',
        name: 'cedule-per-prof',
        component: ceduleProf,
        meta: {
            title: "Cedule per prof"
        }
    },
    {
        path: '/cedule-per-user',
        name: 'cedule-per-user',
        component: ceduleUser,
        meta: {
            title: "Cedule per user"
        }
    },
    {
        path: '/stats/turnover',
        name: 'turnover',
        component: turnover,
        meta: {
            title: "Chiffre d'affaires"
        }
    },
    {
        path: '/stats/stats-categories',
        name: 'statsCategories',
        component: statsCategories,
        meta: {
            title: "stats catégories"
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