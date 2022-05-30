<template>
    <div class="topnav">
        <a href="/" class="topnav-left col-2"><img src="@/assets/images/logo.png" id="logo" alt="logo"></a>
    
        <a href="/">{{ $i18n.t('home') }}</a>
        <a href="/" class="col-2"><img src="@/assets/images/school.png" id="home" alt="home" width="43px" height="43px"></a>

        <router-link to="inscription">{{ $i18n.t('register') }}</router-link>
        <router-link to="inscription"><img src="@/assets/images/pencil.png" width="30px" height="30px"></router-link>
        
        <router-link to="connexion">{{ $i18n.t('login') }}</router-link>
        <router-link to="connexion"><img src="@/assets/images/school-bus.png" width="45px" height="45px"></router-link>
        
        <div class="topnav-right pt-3 pe-2">
            <input v-model="search" @keyup.enter="updateSearchString()" type="text" class="form-control"
             :placeholder="$i18n.t('search')" :aria-label="$i18n.t('search')">
        </div>
        <div class="topnav-right">
            <div v-if="this.$i18n.locale=='fr'">
                <a href="#" @click.prevent="changeLanguage()">
                    <img src="@/assets/images/qc.png" alt="fr" width="44px" height="30px">
                </a>
            </div>
            <div v-else>
                <a href="#" @click.prevent="changeLanguage()">
                    <img src="@/assets/images/en.png" alt="en" width="44px" height="30px">
                </a>
            </div>
        </div>
        <div class="topnav-right">
            <a href="#"> À propos</a>
            <a href="#"> Contact</a>
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
