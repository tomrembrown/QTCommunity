import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import App from './view/App.vue';
import { routes } from './presentationLogic/clientRoutes';
import { store } from './presentationLogic/store';

Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({ 
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  store: store,
  router: router,
  render: h => h(App)
});
