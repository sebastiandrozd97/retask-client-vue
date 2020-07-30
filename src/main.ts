import Vue from 'vue';
import App from './views/App/App.vue';
import './registerServiceWorker';
import router from './router';
import '@/styles/main.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
