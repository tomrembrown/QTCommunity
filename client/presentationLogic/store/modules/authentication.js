'use strict'

import axios from 'axios'

const state = {
  loggedIn: false,
  loginToken: null,
  organizationLogin: null,
  organizationID: null
}

const getters = {
  isLoggedIn: state => {
    return state.loggedIn
  },
  getLoginToken: state => {
    return state.loginToken
  },
  getOrganizationID: state => {
    return state.organizationID
  }
}

const mutations = {
  login(state, payload) {
    state.loggedIn = true
    state.loginToken = payload.loginToken
    state.organizationLogin = payload.organizationLogin
    state.organizationID = payload.organizationID
  },
  logout(state) {
    state.loggedIn = false
    state.loginToken = null
    state.organizationLogin = null
    state.organizationID = null
  }
}

const actions = {
  loginOrganization: async ({commit}, payload) => {
    try {

      const response = await axios.get(
        '/readRoutesServer/checkPassword/' +
          payload.login +
          '/' +
          payload.password
      )
 
      if (response.data.isError) throw new Error(response.data.message)

      if (response.data.login_token != null) {
        console.log('Logging in')
        commit('login', {
          loginToken: response.data.login_token,
          organizationLogin: payload.login,
          organizationID: response.data.id
        })
      }
    } catch (error) {
      console.log(`Error attempting to login organization: ${error.message}`)
      alert(`Error attempting to login organization: ${error.message}`)
    }
  },
  logoutOrganization: async ({commit}) => {
    commit('resetAllForms')
    commit('logout')
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
