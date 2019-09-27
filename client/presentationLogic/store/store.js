'use strict'

import Vue from 'vue'
import Vuex from 'vuex'
import authentication from './modules/authentication'
import allFormsGeneral from './modules/allFormsGeneral'
import imageUpload from './modules/imageUpload'
import calendar from './modules/calendar'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    authentication,
    allFormsGeneral,
    imageUpload,
    calendar
  }
})
