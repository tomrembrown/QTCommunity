'use strict'

import constants from '../../../../joint/constants'

const state = {
  imageFile: null,
  imageUrl: null,
  imageFileName: '',
  imageFormIDName: ''
}

const mutations = {
  setImageFile(state, imageFile) {
    // Called just before modal window opens - so it has access to 
    // image and the URL for the preview
    state.imageFile = null
    state.imageUrl = null
    state.imageFile = imageFile
    state.imageUrl = URL.createObjectURL(state.imageFile)
  },
  setImageFormIDName(state, imageFormIDName) {
    // Called just before modal window opens - so have form id name
    // in the saveImageFile
    state.imageFormIDName = imageFormIDName
  },
  setImageFileName(state, imageFileName) {
    state.imageFileName = imageFileName
  }
}

const getters = {
  getImageUrl: state => state.imageUrl,
  getImageFileName: state => state.imageFileName
}

const actions = {
  saveImageFile: ({state, commit, dispatch}) => {
    // Called when user clicks to save the image file
    
    // Update image name in form - there is a watcher there on the file name
    // so ok to just change the filename
    commit('setImageFileName', state.imageFile.name)

    // Update the form elements in the forms store with path to file
    const payload = {
      element: state.imageFormIDName,
      value: constants.imageURLStart + state.imageFileName
    }
    dispatch('checkErrorAndSetElement', payload)

    // Update the file data in the forms store
    commit('setFileData', state.imageFile)
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
