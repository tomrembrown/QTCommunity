'use strict'

import axios from 'axios'

const state = {
  loggedIn: false,
  loggedInToken: null
}

const getters = {
  isLoggedIn: state => {
    return state.loggedIn
  },
  getLoginToken: state => {
    return state.loggedInToken
  }
}

const mutations = {
  login(state, token) {
    state.loggedIn = true
    state.loggedInToken = token
  },
  logout(state) {
    state.loggedIn = false
    state.loggedInToken = null
  }
}

const actions = {
  loginOrganization: async ({ commit, state }, payload) => {
    try {

      console.log('In Store, payload is: ')
      console.log(payload)

      const response = await axios.get(
        '/readRoutesServer/checkPassword/' +
          payload.login +
          '/' +
          payload.password
      )
      console.log('response.data', response.data)

      if (response.data.isError) throw new Error(response.data.message)

      if (
        response.data.authenticationToken !== null &&
        response.data.authenticationToken !== undefined
      ) {
        commit('login', response.data.authenticationToken)
      }
    } catch (error) {
      console.log('Error: ', error)
      alert('Error attempting to login organization: ' + error.message)
    }

    return
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
