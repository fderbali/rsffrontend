<template>
    <div class="topnav row-100 d-flex justify-content-between">
        <div class="topnav-left d-flex align-items-center">
            <a href="/">
                <img src="@/assets/images/logo.png" id="logo" alt="logo">
            </a>
            <a href="/" class="pt-0">{{ $i18n.t('home') }}</a>
            <router-link to="inscription" class="pt-0">{{ $i18n.t('register') }}</router-link>
        </div>
        <div class="d-flex align-items-center">
        </div>


        <div class="topnav-right d-flex align-items-center">
            <router-link to="connexion" class="pt-0">{{ $i18n.t('login') }}</router-link>
            <a class="pt-0" href="/about-us">{{ $i18n.t('about') }}</a>
            <a class="pt-0" href="/contact"> Contact</a>
            <div class="topnav-right pt-1">
                <div v-if="this.$i18n.locale=='fr'">
                    <a href="#" @click.prevent="changeLanguage()" class="pt-0">
                        <img src="@/assets/images/fr.png" alt="fr" width="44px" height="30px">
                    </a>
                </div>
                <div v-else>
                    <a href="#" @click.prevent="changeLanguage()" class="pt-0">
                        <img src="@/assets/images/en.png" alt="en" width="44px" height="30px">
                    </a>
                </div>
            </div>
            <input v-model="search" @keyup.enter="updateSearchString()" type="text" class="form-control"
                   :placeholder="$i18n.t('search')" :aria-label="$i18n.t('search')">
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import router from "@/libraries/VueRouter";
import { EventBus } from "@/libraries/EventBus.js";
export default {
    name:'MainMenu',
    data(){
        return{
            search: ''
        }
    },
    computed: {
        ...mapState('core/auth', [
            'user'
        ]),
        ...mapState('core/auth', [
            'isAdmin'
        ]),
        initials(){
            return this.user.first_name.charAt(0).toUpperCase() + this.user.last_name.charAt(0).toUpperCase();
        }
    },
    methods:{
        ...mapActions("core/auth", {
            logout: "logout"
        }),
        ...mapActions("core/demand", {
            getSentDemandsByUser:"getSentDemandsByUser",
            getDemandsByTeacher:"getDemandsByTeacher"
        }),
        ...mapActions("core/estimate", [
                'getListEstimatesByUser', 'getListEstimatesProf'
            ]
        ),
        ...mapActions("core/cedule", [
                'getSessionsByProf',
                'getSessionsByUser'
            ]
        ),
        ...mapActions("core/order", [
            'getOrders'
        ]),
        deconnexion(){
            this.logout().then(()=>{
                this.$session.destroy();
                window.localStorage.clear();
                router.push({
                    name: 'login'
                });
            });
        },
        changeLanguage(){
            if(this.$i18n.locale === "fr"){
                this.$i18n.locale = 'en';
            } else {
                this.$i18n.locale = 'fr';
            }
        },
        getListDemands(){
            this.getSentDemandsByUser(this.user.id).then(()=>{
                router.push({
                    name: 'sentDemands'
                });
            })
        },
        getListDemandsByProf(){
            this.getDemandsByTeacher(this.user.id).then(()=>{
                router.push({
                    name: 'receivedDemands'
                });
            });
        },
        getListEstimates(){
            this.getListEstimatesByUser(this.user.id).then(()=>{
                router.push({
                    name: 'receivedEstimates'
                });
            });
        },
        getListEstimatesByProf(){
            this.getListEstimatesProf(this.user.id).then(()=>{
                router.push({
                    name: 'sentEstimates'
                });
            });
        },
        getCeduleByProf(){
            this.getSessionsByProf().then(()=>{
                router.push({
                    name: 'cedule-per-prof'
                });
            });
        },
        getCeduleByUser(){
            this.getSessionsByUser().then(()=>{
                router.push({
                    name: 'cedule-per-user'
                });
            });
        },
        updateSearchString(){
            EventBus.$emit('recherche', this.search);
        },
        getCommandes(){
            this.getOrders().then(()=>{
                router.push({
                    name: 'orders-per-prof'
                });
            });
        }
    }


}
</script>
