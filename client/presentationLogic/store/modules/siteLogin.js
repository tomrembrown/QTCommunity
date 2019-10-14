'use strict'
/*
 * This is the part of the store that handles ensuring the user
 * agreed to the overall terms. Note at the beginning there is a login
 * such that only some users can see the site. This will be removed
 * when the site is formally released.
 */

import axios from 'axios'

const state = {
  agreedToTerms: false;
}

const getters = {
  hasAgreedToTerms: state => state.agreedToTerms
}

const mutations = {
  setAgreed(state) {
    state.agreedToTerms = true
  }
}

const actions = {
  siteLogin: async ({ commit }, payload) => {
    try {
      const response = await axios.get(
        '/readRoutesServer/checkSiteLogin/' +
          payload.login +
          '/' +
          payload.password
      )

      if (response.data.isError) throw new Error(response.data.message)

      if (response.data.isCorrectLogin === true) {
        commit('setAgreed')
      } 
    } catch (error) {
      console.log(`Error attempting to verify site login: ${error.message}`)
      alert(`Error attempting to verify site login: ${error.message}`)
    }
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
