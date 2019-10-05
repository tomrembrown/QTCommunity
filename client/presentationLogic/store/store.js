'use strict'

import Vue from 'vue'
import Vuex from 'vuex'

import allFormsGeneral from './modules/allFormsGeneral'
import authentication from './modules/authentication'
import calendar from './modules/calendar'
import imageUpload from './modules/imageUpload'
import siteLogin from './modules/siteLogin'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    allFormsGeneral,
    authentication,
    calendar,
    imageUpload,
    siteLogin
  }
})
