<template>
  <div>
    <div class="modal-body">
      <div
        class="alert alert-danger"
        role="alert"
        v-show="errorVisible"
      >Either your login or password does not match our records!</div>
      <form action class="sky-form form-sizing-reset">
        <div>
          <div class="row">
            <div class="col-md-12">
              <ash-textbox
                v-model="loginAs"
                v-bind:validate="false"
                heading="Login"
                :idName="formName + '__login'"
                placeholder="Login"
                helpText="Enter a login for the organization"
              ></ash-textbox>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <ash-password
                v-model="password"
                v-bind:validate="false"
                heading="Password"
                :idName="formName + '__password'"
                placeholder="Password"
                helpText="Enter password for organization to login"
              ></ash-password>
            </div>
          </div>
        </div>
      </form>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-primary" @click="login">Login</button>
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
      loginAs: null,
      password: null,
      errorVisible: false
    }
  },
  methods: {
    setThisForm() {
      this.$store.commit('setThisForm', this.formName)
    },
    login() {
      const payload = {
        login: this.loginAs,
        password: this.password
      }

      const marker = this
      this.$store.dispatch('loginOrganization', payload).then(function() {
        if (marker.$store.state.authentication.loggedIn) {
          marker.$modal.hide()
          marker.errorVisible = false
          marker.loginAs = null
          marker.password = null
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
      return forms.LOGIN
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