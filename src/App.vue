<template>
  <div id="app">
    <main-menu></main-menu>
      <div id="wrapper">
        <router-view></router-view>
      </div>
    <footer-app></footer-app>
  </div>
</template>

<script>
import MainMenu from './components/MainMenu.vue';
import FooterApp from './components/FooterApp.vue';
export default {
  name: 'App',
  components: {
    MainMenu,
    FooterApp
  }
}
</script>
<style>
  @import url('assets/css/app.css');
  @import url('assets/css/login.css');
  @import'~bootstrap/dist/css/bootstrap.css'
</style>