<template>
  <div class="container">
    <form action class="sky-form form-sizing-reset">
      <div v-if="registerOrganizationFormSubmittedOK">
        <header>Organization Registered Successfully</header>
      </div>
      <div v-else>
        <header>Register Organization</header>
        <fieldset>
          <div class="row">
            <div class="col-md-4">
              <ash-textbox
                heading="Login"
                placeholder="Login"
                :idName="formName + '__login'"
                helpText="Enter a login for the organization"
              ></ash-textbox>
            </div>
            <div class="col-md-4">
              <ash-password
                heading="Password"
                placeholder="Password"
                :idName="formName + '__password'"
                helpText="Enter password for organization to login"
              ></ash-password>
            </div>
            <div class="col-md-4">
              <ash-password
                heading="Verify Password"
                placeholder="Verify Password"
                :idName="formName + '__verify_password'"
                helpText="Re-enter password to verify"
              ></ash-password>
            </div>
          </div>
        </fieldset>

        <qt-organization-general-top
          :formName="formName"
        ></qt-organization-general-top>
        
        <qt-organization-general-contact
          :formName="formName"
        ></qt-organization-general-contact>

        <fieldset>
          <qt-target-audience 
            :formName="formName"
            type="organization" 
            verb="participate in"
          ></qt-target-audience>
        </fieldset>

        <footer>
          <button type="submit" class="button" @click.prevent="submitForm">Submit</button>
          <button type="reset" class="button button-secondary">Reset</button>
        </footer>
      </div>
    </form>
  </div>
</template>

<script>
import { forms } from '../../../../../joint/dataValidation/general/formsAndTable'
import TargetAudience from '../generalComponents/targetAudience.vue'
import OrganizationGeneralTop from '../generalComponents/organizationGeneralTop.vue'
import OrganizationGeneralContact from '../generalComponents/organizationGeneralContact.vue'
import Textbox from '../../formElements/textbox.vue'
import Password from '../../formElements/password.vue'
import Select from '../../formElements/select.vue'
import Textarea from '../../formElements/textarea.vue'
import Checkbox from '../../formElements/checkbox.vue'

export default {
  data() {
    return {
      registerOrganizationFormSubmittedOK: false
    }
  }, 
  methods: {
    setThisForm() {
      this.$store.commit('setThisForm', this.formName)
    },
    submitForm() {
      let $this = this
      this.$store.dispatch('submitForm').then(itWorked => {
        if (itWorked) $this.registerOrganizationFormSubmittedOK = true
      })
    }
  },
  components: {
    'ash-textbox': Textbox,
    'ash-password': Password,
    'qt-target-audience': TargetAudience,
    'qt-organization-general-top': OrganizationGeneralTop,
    'qt-organization-general-contact': OrganizationGeneralContact,
    'ash-select': Select,
    'ash-textarea': Textarea,
    'ash-checkbox': Checkbox
  },
  computed: {
    formName() {
      return forms.CREATE_ORGANIZATION
    }
  },
  mounted() {
    this.setThisForm()
  }
}
</script>

<style lang="scss" scoped>
@import '../../../scss/forms/form';
@import '../../../scss/forms/header';
@import '../../../scss/forms/fieldset';
@import '../../../scss/forms/h2';
@import '../../../scss/forms/footer';
@import '../../../scss/forms/buttons';
@import '../../../scss/forms/section';
@import '../../../scss/forms/label';
@import '../../../scss/forms/select';
@import '../../../scss/forms/textarea';
@import '../../../scss/forms/checkbox';
</style>
