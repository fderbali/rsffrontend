import Vue from 'vue'
import App from './App.vue'

// Routing 
import VueRouter from 'vue-router'
Vue.use(VueRouter);
import Routes from './routes.js';
const router = new VueRouter({
  mode: 'history',
  routes: Routes
});


// Session
import VueSession from 'vue-session';

//VueX
import store from './store';

//Bootstrap
require('bootstrap');

//Font awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { } from '@fortawesome/free-brands-svg-icons';
import { faTimes, faAngleDown, faStar, faPlus, faFileAlt, faArrowRight, faSearch, faPen } from '@fortawesome/free-solid-svg-icons';
import { } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faTimes, faAngleDown, faStar, faFileAlt, faPlus, faArrowRight, faSearch, faPen);
Vue.component('font-awesome-icon', FontAwesomeIcon);


// Session may persist between tabs and browser instances
Vue.use(VueSession, {
  persist: true
});


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
