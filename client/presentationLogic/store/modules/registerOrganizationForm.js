'use strict'

import axios from 'axios'
const checkError = require('../../../../joint/dataValidation/general/checkError')
const checkMandatoryElementsSet = require('../../../../joint/dataValidation/general/checkMandatoryElementsSet')
const checkVerifyPassword = require('../../../../joint/dataValidation/general/checkVerifyPassword')

const state = {
  formElements: {},
  errors: []
}

const mutations = {
  setElement (state, payload) {
    state.formElements[payload.element] = payload.value
  },
  removeElement (state, element) {
    if (element in state.formElements) {
      delete state.formElements[element]
    }
  },
  removeError (state, element) {
    const errorLocation = state.errors.indexOf(
      state.errors.find(error => {
        return error!== undefined && error.element === element
      })
    )

    if (errorLocation !== -1) {
      state.errors.splice(errorLocation, 1)
    }
  },
  pushError (state, thisError) {
    if (thisError !== null) {
      state.errors.push(thisError)
    }
  }
}

const getters = {
  getError: state => thisElement => {
    return state.errors.filter(error => error !== undefined && error.element === thisElement)
  }
}

const actions = {
  checkErrorAndSetElement: async ({ commit }, payload) => {
    commit('setElement', payload)
    const thisError = await checkError(
      payload.element,
      payload.value,
      state.formElements
    )
    commit('removeError', payload.element)
    commit('pushError', thisError)
  },
  submitRegisterOrganizationForm: ({ commit, state }) => {
    const missingErrors = checkMandatoryElementsSet(state.formElements)
    if (missingErrors.length > 0) {
      missingErrors.forEach(thisError => {
        commit('removeError', thisError.element)
        commit('pushError', thisError)
      })
      document.getElementById(missingErrors[0].element).scrollIntoView()
    }

    const verifyError = checkVerifyPassword(state.formElements)
    if (verifyError !== null) {
      commit('removeError', verifyError.element)
      commit('pushError', verifyError)
      document.getElementById(verifyError.element).scrollIntoView()
    }

    // Only submit form if no errors
    if (state.errors.length === 0) {
      // Verified that password = verify password above - don't need verify password on server
      commit('removeElement', 'verify_password')

      axios
        .post('createRoutesServer/createOrganization', state.formElements)
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
