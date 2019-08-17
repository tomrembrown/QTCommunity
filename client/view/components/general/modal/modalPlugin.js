//https://medium.com/@panzelva/writing-modals-for-vue-js-callable-from-anywhere-6994d180451
import AppModal from './AppModal.vue'

const Modal = {
  install(Vue, options) {
    this.EventBus = new Vue()
    Vue.component('app-modal', AppModal)
    Vue.prototype.$modal = {
      show(params) {
        Modal.EventBus.$emit('show', params)
      },
      hide() {
        Modal.EventBus.$emit('hide')
      }
    }
  }
}

export default Modal
                                                    