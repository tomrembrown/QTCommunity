'use strict'

import Vue from 'vue'
import VueRouter from 'vue-router'
import BootStrapVue from 'bootstrap-vue'
import VueCookies from 'vue-cookies'
import App from './view/App.vue'
import { routes } from './presentationLogic/clientRoutes'
import { store } from './presentationLogic/store/store'
import Modal from './view/components/general/modal/modalPlugin'
import { isFlowBaseAnnotation } from '@babel/types'

import moment from 'moment-timezone'
moment.tz.setDefault('EST')

Object.defineProperty(Vue.prototype, '$moment', {
  get() {
    return this.$root.moment;
  }
});

Vue.use(VueRouter)
Vue.use(Modal)
Vue.use(BootStrapVue)
Vue.use(VueCookies)

const router = new VueRouter({
  routes,
  mode: 'history'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    moment
  },
  store: store,
  router: router,
  render: h => h(App)
})
