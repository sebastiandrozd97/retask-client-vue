import Vue from 'vue';
import App from './views/App/App.vue';
//import './registerServiceWorker';
import router from './router';
import '@/styles/main.scss';
import '@/styles/listitemstyles.scss';
import '@/styles/modals/newmodal.scss';
import '@/styles/modals/deletemodal.scss';
import '@/styles/modals/editmodal.scss';
import '@/styles/modals/modal.scss';
import '@/styles/liststyles.scss';
import '@/styles/dashboardstyles.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faUserTie,
  faHardHat,
  faCog,
  faBuilding,
  faBell,
  faSignOutAlt,
  faExclamationTriangle,
  faAngleDown,
  faChevronLeft
} from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt, faEdit } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(
  faUserTie,
  faHardHat,
  faCog,
  faBuilding,
  faBell,
  faSignOutAlt,
  faTrashAlt,
  faEdit,
  faExclamationTriangle,
  faAngleDown,
  faChevronLeft
);

Vue.component('fa-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
