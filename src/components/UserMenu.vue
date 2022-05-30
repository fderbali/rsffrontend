<template>
    <div class="topnav">
        <a href="/" class="topnav-left col-2"><img src="@/assets/images/logo.png" id="logo" alt="logo"></a>
    
        <a href="/">{{ $i18n.t('home') }}</a>
        <a href="/" class="col-2"><img src="@/assets/images/school.png" id="home" alt="home" width="43px" height="43px"></a>
    
        <a href="form-trainings">{{ $i18n.t('publish-t') }}</a>   

        <div classe="">
            <a class="dropdown dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                <span id="initials" >{{initials}}</span>
            </a>
                <ul class="dropdown-menu" id="dd-menu-rsf" aria-labelledby="dropdownUser1">
                    <li><a class="dropdown-item" href="#">{{ $i18n.t('my-announces') }}</a></li>
                    <li><a class="dropdown-item" href="#" @click.prevent="">{{ $i18n.t('my-orders') }}</a></li>
                    <li><a class="dropdown-item" href="#" @click.prevent="getCeduleByProf()">{{ $i18n.t('i-teach') }}</a></li>
                    <li><a class="dropdown-item" href="#" @click.prevent="getCeduleByUser()">{{ $i18n.t('i-learn') }}</a></li>
                    <li><a class="dropdown-item" href="#" @click.prevent="getListDemands()">{{ $i18n.t('s-demands') }}</a></li>
                    <li><a class="dropdown-item" href="#" @click.prevent="getListDemandsByProf()">{{ $i18n.t('r-demands') }}</a></li>
                    <li><a class="dropdown-item" href="#" @click.prevent="getListEstimatesByProf()">{{ $i18n.t('s-estimates') }}</a></li>
                    <li><a class="dropdown-item" href="#" @click.prevent="getListEstimates()">{{ $i18n.t('r-estimates') }}</a></li>
                    <li><hr class="dropdown-divider text-success"></li>
                    <li><a class="dropdown-item" href="#" @click.prevent="deconnexion()">{{ $i18n.t('logoff') }}</a></li>
                </ul>
        </div>
        
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
        }
        
    }


}
</script>
