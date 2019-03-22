const state = {
  textbox: {
    "longTitle": "",
    "shortTitle": "",
    "mobileTitle": "",
    "imageLink": "",
    "website": ""
  }
}

const getters = {
  getLongTitle: state => {
    return state.longTitle
  }
}

const mutations = {
  setTextboxElement (state, payload) {
    state.textbox[payload.element] = payload.value
  },
  submitForm (state) {
    console.log("Hello")
    console.log(state.textbox)
  }
}

export default {
  state, getters, mutations
}