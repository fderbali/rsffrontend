<template>
    <div id="login">
        <main class="form-signin">
            <form>
                <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
                <div class="form-floating">
                    <input type="email" class="form-control" id="floatingInput" v-model="email">
                    <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating">
                    <input type="password" class="form-control" id="floatingPassword" v-model="password">
                    <label for="floatingPassword">Password</label>
                </div>
                <button class="w-100 btn btn-lg btn-primary" type="submit" @click.prevent="login()">
                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" v-if="loading"></span>
                    Sign in
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
                Alert.success(this.$i18n.t('welcome'))
                router.push({
                    name: 'home'
                });
            })
            .catch((error) => {
                if (error.response.status === HttpStatus.UNPROCESSABLE_ENTITY) {
                    Alert.fail("Le nom d'utilisateur ou le mot de passe est incorrect");
                }
            })
            .finally(() => {
                this.loading = false;
            });
        }
    }
}
</script>
