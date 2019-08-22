'use strict'
/*
 * This is the part of the store that handles the image upload modal
 * window - storing information there when loaded
 */

const state = {
  imageFile: null,
  imageUrl: null,
  imageFileName: '',
  imageFormIDName: '',
  imageFileType: ''
}

const mutations = {
  setImageFile(state, imageFile) {
    // Called just before modal window opens - so it has access to 
    // image and the URL for the preview
    state.imageFile = imageFile
    state.imageUrl = URL.createObjectURL(state.imageFile)
    state.imageFileType = imageFile.type
  },
  setImageFormIDName(state, imageFormIDName) {
    // Called just before modal window opens - so have form id name
    // in the saveImageFile
    state.imageFormIDName = imageFormIDName
  },
  setImageFileName(state) {
    // Called when save image - so it puts on the form
    // Note that watch placed on imagefilename in form
    state.imageFileName = state.imageFile.name
  }
}

const getters = {
  getImageUrl: state => state.imageUrl,
  getImageFileName: state => state.imageFileName,
  getImageFileType: state => state.imageFileType,
  getImageFormIDName: state => state.imageFormIDName
}

export default {
  state,
  mutations,
  getters
}
