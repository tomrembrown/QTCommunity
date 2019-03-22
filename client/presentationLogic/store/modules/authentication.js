const state = {
  loggedIn: false
}

const getters = {
  isLoggedIn: state => {
    return state.loggedIn
  }
}

export default {
  state, getters
}