<template>
  <div id="app">
    <main-menu></main-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import MainMenu from './components/MainMenu.vue';
export default {
  name: 'App',
  components: {
    MainMenu
  }
}
</script>
<style>
  @import url('assets/css/app.css');
  @import'~bootstrap/dist/css/bootstrap.css'
</style>