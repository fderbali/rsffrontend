<template>
    <header class="p-3 mb-3 border-bottom">
        <div class="container">
            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none me-5">
                    <img src="@/assets/images/logo.png" id="logo" alt="logo">
                </a>

                <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <li><a href="/" class="nav-link px-2 link-secondary">{{ $i18n.t('home') }}</a></li>
                    <li><a v-if="user" href="form-trainings" class="nav-link px-2 link-dark">{{ $i18n.t('publish-t') }}</a></li>
                    <li><a v-if="user" href="#" class="nav-link px-2 link-dark">{{ $i18n.t('publish-a') }}</a></li>
                </ul>

                <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 d-flex flex-wrap align-items-center justify-content-center">
                    <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li v-if="this.$i18n.locale=='fr'">
                            <a href="#" @click.prevent="changeLanguage()">
                                <img src="@/assets/images/en.png" alt="en">
                            </a>
                        </li>
                        <li v-else>
                            <a href="#" @click.prevent="changeLanguage()">
                                <img src="@/assets/images/fr.png" alt="fr">
                            </a>
                        </li>
                    </ul>
                    <div class="ps-3">
                        <input type="search" class="form-control" :placeholder="$i18n.t('search')" :aria-label="$i18n.t('search')">
                    </div>
                </form>

                <div class="dropdown text-end" v-if="user">
                    <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle">
                    </a>
                    <ul class="dropdown-menu text-small" aria-labelledby="dropdownUser1">
                        <li><a class="dropdown-item" href="#">{{ $i18n.t('chat') }}</a></li>
                        <li><a class="dropdown-item" href="#">{{ $i18n.t('my-announces') }}</a></li>
                        <li><a class="dropdown-item" href="#">{{ $i18n.t('i-teach') }}</a></li>
                        <li><a class="dropdown-item" href="#">{{ $i18n.t('i-learn') }}</a></li>
                        <li><a class="dropdown-item" href="#">{{ $i18n.t('s-demands') }}</a></li>
                        <li><a class="dropdown-item" href="#">{{ $i18n.t('r-demands') }}</a></li>
                        <li><a class="dropdown-item" href="#">{{ $i18n.t('s-estimates') }}</a></li>
                        <li><a class="dropdown-item" href="#">{{ $i18n.t('r-estimates') }}</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#" @click.prevent="deconnexion()">{{ $i18n.t('logoff') }}</a></li>
                    </ul>
                </div>
                <ul v-else class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
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
    },
    methods:{
        ...mapActions("core/auth", {
            logout: "logout"
        }),
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
        }
    }


}
</script>

<style>

</style>