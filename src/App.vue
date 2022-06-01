<template>
    <div id="app">
        <UserMenu v-if="user"></UserMenu>
        <main-menu v-else></main-menu>
        <div id="wrapper">
            <router-view></router-view>
        </div>
        <footer-app></footer-app>
    </div>
</template>

<script>
import MainMenu from './components/MainMenu.vue';
import FooterApp from './components/FooterApp.vue';
import UserMenu from "@/components/UserMenu";
import { mapState } from 'vuex';
export default {
    name: 'App',
    components: {
        MainMenu,
        FooterApp,
        UserMenu
    },
    computed: {
        ...mapState('core/auth', [
            'user'
        ])
    }
}
</script>
<style>
  @import url('assets/css/app.css');
  @import'~bootstrap/dist/css/bootstrap.css'
</style>