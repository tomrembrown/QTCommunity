'use strict'

import axios from 'axios'

const state = {
  loggedIn: false,
  loginToken: null
}

const getters = {
  isLoggedIn: state => {
    return state.loggedIn
  },
  getLoginToken: state => {
    return state.loginToken
  }
}

const mutations = {
  login(state, loginToken) {
    state.loggedIn = true
    state.loginToken = loginToken
  },
  logout(state) {
    state.loggedIn = false
    state.loginToken = null
  }
}

const actions = {
  loginOrganization: async ({ commit, state }, payload) => {
    try {
      const response = await axios.get(
        '/readRoutesServer/checkPassword/' +
          payload.login +
          '/' +
          payload.password
      )
      console.log('response.data', response.data)

      if (response.data.isError) throw new Error(response.data.message)

      if (response.data.loginToken != null) {
        commit('login', response.data.loginToken)
      }
    } catch (error) {
      console.log(`Error: ${error.message}`)
      alert(`Error attempting to login organization: ${error.message}`)
    }
  },
  logoutOrganization: async ({ commit, state }) => {
    commit('logout')
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
