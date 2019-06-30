<template>
  <div class="container">
    <form action class="sky-form form-sizing-reset">
      <div v-if="formSubmittedOK">
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
          <div class="row">
            <div class="col-md-6">
              <ash-textbox
                heading="Name"
                :idName="formName + '__name'"
                placeholder="Enter name"
                helpText="Enter a short, unique, name to refer to the organization"
              ></ash-textbox>
            </div>
            <div class="col-md-6">
              <ash-select
                heading="Type of Organization"
                :idName="formName + '__organization_type_id'"
                table="organization_types"
              ></ash-select>
            </div>
          </div>

          <div class="row align-items-center">
            <div class="col-md-12">
              <ash-textarea
                heading="Description of Organization"
                :idName="formName + '__description_english'"
                placeholder="Enter description of organization"
              ></ash-textarea>
            </div>
          </div>
        </fieldset>
        <fieldset>
          <div class="row align-items-center">
            <div class="col-md-3">
              <ash-textbox
                heading="Phone"
                :idName="formName + '__phone'"
                placeholder="(416) 123-4567"
                helpText="Enter organization's phone number"
              ></ash-textbox>
            </div>
            <div class="col-md-2">
              <ash-textbox 
                heading="Phone Extension"
                :idName="formName + '__phone_extension'"
                helpText="Phone extension. Blank if none"
              ></ash-textbox>
            </div>
            <div class="col-md-1">
              <ash-checkbox heading="Show" idName="display_phone" :value="false"></ash-checkbox>
            </div>
            <div class="col-md-6">
              <ash-textbox
                heading="Image Link"
                :idName="formName + '__image_link'"
                helpText="Enter web address for logo for organization.  Mandatory field"
              ></ash-textbox>
            </div>
          </div>

          <div class="row align-items-center">
            <div class="col-md-5">
              <ash-textbox
                heading="Email"
                :idName="formName + '__email'"
                helpText="Enter email address for organization.  Leave blank if none"
              ></ash-textbox>
            </div>
            <div class="col-md-1">
              <ash-checkbox 
                heading="Show" 
                :idName="formName + '__display_email'" 
                :value="false"
              ></ash-checkbox>
            </div>
            <div class="col-md-5">
              <ash-textbox
                heading="Website"
                :idName="formName + '__website_english'"
                helpText="Enter website for organization. Leave blank if none"
              ></ash-textbox>
            </div>
            <div class="col-md-1">
              <ash-checkbox 
                heading="Show" 
                :idName="formName + '__display_website'" 
                :value="false"
              ></ash-checkbox>
            </div>
          </div>

          <div class="row align-items-center">
            <div class="col-md-5">
              <ash-textbox
                heading="Facebook"
                :idName="formName + '__facebook'"
                helpText="Enter facebook webpage for organization. Leave blank if none"
              ></ash-textbox>
            </div>
            <div class="col-md-1">
              <ash-checkbox 
                heading="Show" 
                :idName="formName + '__display_facebook'"
                :value="false"
              ></ash-checkbox>
            </div>
            <div class="col-md-5">
              <ash-textbox
                heading="Twitter"
                :idName="formName + '__twitter'"
                helpText="Enter twitter webpage for organization. Leave blank if none"
              ></ash-textbox>
            </div>
            <div class="col-md-1">
              <ash-checkbox 
                heading="Show" 
                :idName="formName + '__display_twitter'" 
                :value="false"
              ></ash-checkbox>
            </div>
          </div>

          <div class="row align-items-center">
            <div class="col-md-5">
              <ash-textbox
                heading="YouTube"
                :idName="formName + '__youtube'"
                helpText="Enter YouTube address for organization. Leave blank if none"
              ></ash-textbox>
            </div>
            <div class="col-md-1">
              <ash-checkbox 
                heading="Show" 
                :idName="formName + '__display_youtube'" 
                :value="false"
              ></ash-checkbox>
            </div>
            <div class="col-md-5">
              <ash-textbox
                heading="Instagram"
                :idName="formName + '__instagram'"
                helpText="Enter Instagram address for organization. Leave blank if none"
              ></ash-textbox>
            </div>
            <div class="col-md-1">
              <ash-checkbox 
                heading="Show" 
                :idName="formName + '__display_instagram'" 
                :value="false"
              ></ash-checkbox>
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col-md-5">
              <ash-textbox
                heading="LinkedIn"
                :idName="formName + '__linkedin'"
                helpText="Enter LinkedIn address for organization. Leave blank if none"
              ></ash-textbox>
            </div>
            <div class="col-md-1">
              <ash-checkbox 
                heading="Show" 
                :idName="formName + '__display_linkedin'" 
                :value="false"
              ></ash-checkbox>
            </div>
            <div class="col-md-5">
              <ash-textbox
                heading="Pinterest"
                :idName="formName + '__pinterest'"
                helpText="Enter Pinterest address for organization. Leave blank if none"
              ></ash-textbox>
            </div>
            <div class="col-md-1">
              <ash-checkbox 
                heading="Show" 
                :idName="formName + '__display_pinterest'" 
                :value="false"
              ></ash-checkbox>
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col-md-5">
              <ash-textbox
                heading="Google Plus"
                :idName="formName + '__google_plus'"
                helpText="Enter Google+ address for organization. Leave blank if none"
              ></ash-textbox>
            </div>
            <div class="col-md-1">
              <ash-checkbox 
                heading="Show" 
                :idName="formName + '__display_google_plus'" 
                :value="false"
              ></ash-checkbox>
            </div>
            <div class="col-md-5">
              <ash-textbox
                heading="RSS"
                :idName="formName + '__rss'"
                helpText="Enter RSS Feed for organization. Leave blank if none"
              ></ash-textbox>
            </div>
            <div class="col-md-1">
              <ash-checkbox 
                heading="Show" 
                :idName="formName + '__display_rss'" 
                :value="false"
              ></ash-checkbox>
            </div>
          </div>
        </fieldset>
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
import Textbox from '../../formElements/textbox.vue'
import Password from '../../formElements/password.vue'
import Select from '../../formElements/select.vue'
import Textarea from '../../formElements/textarea.vue'
import Checkbox from '../../formElements/checkbox.vue'

export default {
  methods: {
    setThisForm() {
      this.$store.commit('setThisForm', this.formName)
    },
    submitForm() {
      this.$store.dispatch('submitForm')
    }
  },
  components: {
    'ash-textbox': Textbox,
    'ash-password': Password,
    'qt-target-audience': TargetAudience,
    'ash-select': Select,
    'ash-textarea': Textarea,
    'ash-checkbox': Checkbox
  },
  computed: {
    formSubmittedOK() {
      return this.$store.getters.getFormSubmittedOK
    },
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
