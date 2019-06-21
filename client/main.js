'use strict'

import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './view/App.vue'
import { routes } from './presentationLogic/clientRoutes'
import { store } from './presentationLogic/store/store'
import LoginModal from './view/components/admin/organizationLogin/organizationLogin.js'

Vue.use(VueRouter)
Vue.use(LoginModal)

const router = new VueRouter({
  routes,
  mode: 'history'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store: store,
  router: router,
  render: h => h(App)
})
