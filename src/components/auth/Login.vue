<template>
    <div id="login" class="container">
        <form>
            <div class="titre-principal">{{ $i18n.t('login') }}</div>
            <div class="row">
                <div class="col-sm-12">
                    <label for="email">{{ $i18n.t('email') }}</label>
                    <input type="email" class="form-control" v-model="email">
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <label for="password">{{ $i18n.t('pw') }}</label>
                    <input type="password" class="form-control" v-model="password">
                </div>
            </div>
            <button class="btn" type="submit" @click.prevent="login()">
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" v-if="loading"></span>
                {{ $i18n.t('submit') }}
            </button>
        </form>
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
