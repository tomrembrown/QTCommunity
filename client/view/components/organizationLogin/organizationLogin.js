//https://medium.com/@panzelva/writing-modals-for-vue-js-callable-from-anywhere-6994d180451
import OrganizationLogin from './OrganizationLogin.vue'

const LoginModal = {
	install(Vue, options) {
		this.EventBus = new Vue();
		Vue.component('login-modal', OrganizationLogin);
		Vue.prototype.$login = {
			toggle(params) {
				LoginModal.EventBus.$emit('toggle', params);
			}
		}
	}
};

export default LoginModal;