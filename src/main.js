import Vue from 'vue'
import App from './App.vue'

// Session
import VueSession from 'vue-session';

//VueX
import store from './store';

//Bootstrap
require('bootstrap');

//Font awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faGithub, faPaypal} from '@fortawesome/free-brands-svg-icons';
import { faTimes, faAngleDown, faStar, faPlus, faFileAlt, faArrowRight, faSearch, faPen, faMapMarker} from '@fortawesome/free-solid-svg-icons';
import { } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faTimes, faAngleDown, faStar, faFileAlt, faPlus, faArrowRight, faSearch, faPen, faFacebook, faTwitter, faInstagram, faLinkedin, faGithub, faMapMarker, faPaypal);
Vue.component('font-awesome-icon', FontAwesomeIcon);

// Session may persist between tabs and browser instances
Vue.use(VueSession, {
  persist: true
});


Vue.config.productionTip = false;

// i18n
import i18n from './libraries/i18n.js';
Vue.use(i18n);

// Import Router
import router from './libraries/VueRouter.js';

new Vue({
  i18n,
  render: h => h(App),
  store,
  router
}).$mount('#app')
