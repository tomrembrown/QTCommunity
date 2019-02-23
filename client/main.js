import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './view/templates/App.vue';

Vue.use(VueResource);

new Vue({
  el: '#app',
  render: h => h(App)
});
