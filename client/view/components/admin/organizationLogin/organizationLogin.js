//https://medium.com/@panzelva/writing-modals-for-vue-js-callable-from-anywhere-6994d180451
import OrganizationLogin from './organizationLoginModal.vue'

const LoginModal = {
  install(Vue, options) {
    this.EventBus = new Vue()
    Vue.component('login-modal', OrganizationLogin)
    Vue.prototype.$login = {
      toggle(params) {
        console.log('In toggle login')
        LoginModal.EventBus.$emit('toggle', params)
      }
    }
  }
}

export default LoginModal
