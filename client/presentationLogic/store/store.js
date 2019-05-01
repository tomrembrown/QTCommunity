'use strict'

import Vue from 'vue'
import Vuex from 'vuex'
import authentication from './modules/authentication'
import registerOrganizationForm from './modules/registerOrganizationForm'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    authentication,
    registerOrganizationForm
  }
})
