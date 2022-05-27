<template>
    <header class="p-3 mb-3 fs-4 border-bottom" id="nav-rsf">
        <div class="container">
            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none me-5">
                    <img src="@/assets/images/logo.png" id="logo" alt="logo">
                </a>
                <ul class="nav col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <li><a href="/" class="nav-link px-2 pt-1 link-secondary">
                        <img src="@/assets/images/home.png" id="home" alt="home"></a> </li>
                    <li><a v-if="user" href="form-trainings" class="nav-link px-2 link-dark">{{ $i18n.t('publish-t') }}</a></li>
                    <li><a v-if="user" href="#" class="nav-link px-2 link-dark">{{ $i18n.t('publish-a') }}</a></li>
                    <li><a v-if="user" href="/orders-per-prof" class="nav-link px-2 link-dark">Sessions</a></li>
                </ul>
                <div class="col-lg-auto me-lg-2 d-flex flex-wrap align-items-center justify-content-center">
                    <ul class="nav col-1 col-lg-auto me-lg-auto pb-2 justify-content-center mb-md-0">
                        <li v-if="this.$i18n.locale=='fr'">
                            <a href="#" @click.prevent="changeLanguage()">
                                <img src="@/assets/images/en.png" alt="en" width="44px" height="30">
                            </a>
                        </li>
                        <li v-else>
                            <a href="#" @click.prevent="changeLanguage()">
                                <img src="@/assets/images/qc.png" alt="fr" width="44px" height="30">
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="col-2 ps-3">
                    <input type="search" class="form-control" :placeholder="$i18n.t('search')" :aria-label="$i18n.t('search')">
                </div>
                <div v-if="user" class="col-1 pb-1 dropdown text-end" >
                    <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <span class="rounded-circle text-center text-white" id="initials" >{{initials}}</span>
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
                        <li><hr class="dropdown-divider text-danger"></li>
                        <li><a class="dropdown-item" href="#" @click.prevent="deconnexion()">{{ $i18n.t('logoff') }}</a></li>
                    </ul>
                </div>
                <ul v-else class="nav col-lg-auto me-lg-auto mb-2 mr-auto justify-content-center mb-md-0">
                    <router-link to="connexion" class="nav-link px-2 link-secondary">{{ $i18n.t('login') }}</router-link>
                    <router-link to="inscription" class="nav-link px-2 link-secondary">{{ $i18n.t('register') }}</router-link>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import router from "@/libraries/VueRouter";
export default {
    name:'MainMenu',
    data(){
        return{

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
                'getSessionsByProf', 'getSessionsByProf'
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
            this.getSessionsByProf()
        }
    }


}
</script>
