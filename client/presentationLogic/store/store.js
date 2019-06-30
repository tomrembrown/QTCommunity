'use strict'

import Vue from 'vue'
import Vuex from 'vuex'
import authentication from './modules/authentication'
import allFormsGeneral from './modules/allFormsGeneral'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    authentication,
    allFormsGeneral
  }
})
