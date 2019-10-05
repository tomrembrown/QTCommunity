<template>
  <div>
    <div class="modal-body">
      <div
        class="alert alert-danger"
        role="alert"
        v-show="errorVisible"
      >Either the login or password does not match our records!</div>
      <form action class="sky-form form-sizing-reset">
        <div>
          <div class="row">
            <div class="col-md-12">
              <ash-textbox
                v-model="login"
                :validate="false"
                heading="Login"
                :idName="formName + '__login'"
                placeholder="Login"
                helpText="Enter the site login"
              ></ash-textbox>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <ash-password
                v-model="password"
                :validate="false"
                heading="Password"
                :idName="formName + '__password'"
                placeholder="Password"
                helpText="Enter the site password"
              ></ash-password>
            </div>
          </div>
        </div>
      </form>
      <div class="legal-notice">
        This site is currently a prototype in alpha only. It is still in development. The data in it is for demonstration purposes only. The creators of this site 
        cannot be held liable for any damages resulting from the use of the site. By clicking on 'Login and Agree' below you are accepting these terms.
      </div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-primary" @click="processLogin">Login and Agree</button>
    </div>
  </div>
</template>

<script>
import Textbox from '../../../formElements/textbox.vue'
import Password from '../../../formElements/password.vue'
import { forms } from '../../../../../../joint/dataValidation/general/formsAndTable'

export default {
  data() {
    return {
      login: null,
      password: null,
      errorVisible: false
    }
  },
  methods: {
    setThisForm() {
      this.$store.commit('setThisForm', this.formName)
    },
    processLogin() {
      const payload = {
        login: this.login,
        password: this.password
      }

      const marker = this
      this.$store.dispatch('siteLogin', payload).then(function() {
        if (marker.$store.state.siteLogin.agreedToTerms) {
          marker.errorVisible = false
          marker.login = null
          marker.password = null
          marker.$modal.hide()
        } else {
          marker.errorVisible = true
        }
      })
    }
  },
  components: {
    'ash-textbox': Textbox,
    'ash-password': Password
  }, 
  computed: {
    formName() {
      return forms.SITE_LOGIN
    }
  },
  beforeMount() {
    this.setThisForm()
  }
}
</script>

<style lang="scss" scoped>
.modal-body .row {
  margin: 0 0 15px;
}

.modal-body .row:last-child {
  margin: 0;
}
</style>