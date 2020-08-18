import Vue from 'vue';
import App from './views/App/App.vue';
//import './registerServiceWorker';
import router from './router';
import '@/styles/main.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserTie, faHardHat, faCog, faBuilding, faBell, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt, faEdit } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faUserTie, faHardHat, faCog, faBuilding, faBell, faSignOutAlt, faTrashAlt, faEdit);

Vue.component('fa-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
