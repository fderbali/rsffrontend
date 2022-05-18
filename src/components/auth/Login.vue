<template>
    <div id="login">
        <main class="form-signin bg-warning bg-opacity-50 border border-danger rounded">
            <form>
                <h2 class="pb-3 text-center text-danger titre-principal">{{ $i18n.t('login') }}</h2>
                <div class="form-floating">
                    <input type="email" class="form-control border-danger" id="floatingInput" v-model="email">
                    <label for="floatingInput">{{ $i18n.t('email') }}</label>
                </div>
                <div class="form-floating">
                    <input type="password" class="form-control border-danger" id="floatingPassword" v-model="password">
                    <label for="floatingPassword">{{ $i18n.t('pw') }}</label>
                </div>
                <button class="w-100 btn btn-lg btn-success border-danger opacity-75" type="submit" @click.prevent="login()">
                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" v-if="loading"></span>
                    {{ $i18n.t('submit') }}
                </button>
            </form>
        </main>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Alert                    from '@/libraries/Alert.js';
import HttpStatus               from 'http-status-codes';
import router                   from "@/libraries/VueRouter";

export default {
    data() {
        return {
            loading: false,
            email: '',
            password: ''
        }
    },
    computed: {
        ...mapState('core/auth', [
            'user'
        ]),
    },
    methods:{
        ...mapActions('core/auth', {
            authLogin:            'login',
            getAuthenticatedUser: 'getAuthenticatedUser'
        }),
        /**
        * Login
        * - check if username and password input is provided
        * - Ajax request to login to the system
        */
        login () {
            this.loading = true;
            // Login via the API
            this.authLogin({
                email:    this.email,
                password: this.password
            })
            .then(() => {
                this.$session.start();
                Alert.success(this.$i18n.t('msg-suc1')) //"Bienvenue!"
                router.push({
                    name: 'home'
                });
            })
            .catch((error) => {
                if (error.response.status === HttpStatus.UNPROCESSABLE_ENTITY) {
                    Alert.fail(this.$i18n.t('msg-err2')); //"Le nom d'utilisateur et/ou le mot de passe sont incorrects"
                }
            })
            .finally(() => {
                this.loading = false;
            });
        }
    }
}
</script>
