<template>
  <div class="container">
    <form action class="sky-form form-sizing-reset">
      <div v-if="organizationRegistered">
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
                helpText="Enter a login for the organization"
              ></ash-textbox>
            </div>
            <div class="col-md-4">
              <ash-password
                heading="Password"
                placeholder="Password"
                helpText="Enter password for organization to login"
              ></ash-password>
            </div>
            <div class="col-md-4">
              <ash-password
                heading="Verify Password"
                placeholder="Verify Password"
                helpText="Re-enter password to verify"
              ></ash-password>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <ash-textbox
                heading="Name"
                placeholder="Enter name"
                helpText="Enter a short, unique, name to refer to the organization"
              ></ash-textbox>
            </div>
            <div class="col-md-6">
              <ash-select
                heading="Type of Organization"
                idName="organization_type_id"
                table="organization_types"
              ></ash-select>
            </div>
          </div>

          <div class="row align-items-center">
            <div class="col-md-12">
              <ash-textarea
                heading="Description of Organization"
                idName="description_english"
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
                placeholder="(416) 123-4567"
                helpText="Enter organization's phone number"
              ></ash-textbox>
            </div>
            <div class="col-md-2">
              <ash-textbox heading="Phone Extension" helpText="Phone extension. Blank if none"></ash-textbox>
            </div>
            <div class="col-md-1">
              <ash-checkbox heading="Show" idName="display_phone" :value="false"></ash-checkbox>
            </div>
            <div class="col-md-6">
              <ash-textbox
                heading="Image Link"
                helpText="Enter web address for logo for organization.  Mandatory field"
              ></ash-textbox>
            </div>
          </div>

          <div class="row align-items-center">
            <div class="col-md-5">
              <ash-textbox
                heading="Email"
                helpText="Enter email address for organization.  Leave blank if none"
              ></ash-textbox>
            </div>
            <div class="col-md-1">
              <ash-checkbox heading="Show" idName="display_email" :value="false"></ash-checkbox>
            </div>
            <div class="col-md-5">
              <ash-textbox
                heading="Website"
                idName="website_english"
                helpText="Enter website for organization. Leave blank if none"
              ></ash-textbox>
            </div>
            <div class="col-md-1">
              <ash-checkbox heading="Show" idName="display_website" :value="false"></ash-checkbox>
            </div>
          </div>

          <div class="row align-items-center">
            <div class="col-md-5">
              <ash-textbox
                heading="Facebook"
                helpText="Enter facebook webpage for organization. Leave blank if none"
              ></ash-textbox>
            </div>
            <div class="col-md-1">
              <ash-checkbox heading="Show" idName="display_facebook" :value="false"></ash-checkbox>
            </div>
            <div class="col-md-5">
              <ash-textbox
                heading="Twitter"
                helpText="Enter twitter webpage for organization. Leave blank if none"
              ></ash-textbox>
            </div>
            <div class="col-md-1">
              <ash-checkbox heading="Show" idName="display_twitter" :value="false"></ash-checkbox>
            </div>
          </div>

          <div class="row align-items-center">
            <div class="col-md-5">
              <ash-textbox
                heading="YouTube"
                helpText="Enter YouTube address for organization. Leave blank if none"
              ></ash-textbox>
            </div>
            <div class="col-md-1">
              <ash-checkbox heading="Show" idName="display_youtube" :value="false"></ash-checkbox>
            </div>
            <div class="col-md-5">
              <ash-textbox
                heading="Instagram"
                helpText="Enter Instagram address for organization. Leave blank if none"
              ></ash-textbox>
            </div>
            <div class="col-md-1">
              <ash-checkbox heading="Show" idName="display_instagram" :value="false"></ash-checkbox>
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col-md-5">
              <ash-textbox
                heading="LinkedIn"
                helpText="Enter LinkedIn address for organization. Leave blank if none"
              ></ash-textbox>
            </div>
            <div class="col-md-1">
              <ash-checkbox heading="Show" idName="display_linkedin" :value="false"></ash-checkbox>
            </div>
            <div class="col-md-5">
              <ash-textbox
                heading="Pinterest"
                helpText="Enter Pinterest address for organization. Leave blank if none"
              ></ash-textbox>
            </div>
            <div class="col-md-1">
              <ash-checkbox heading="Show" idName="display_pinterest" :value="false"></ash-checkbox>
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col-md-5">
              <ash-textbox
                heading="Google Plus"
                helpText="Enter Google+ address for organization. Leave blank if none"
              ></ash-textbox>
            </div>
            <div class="col-md-1">
              <ash-checkbox heading="Show" idName="display_google_plus" :value="false"></ash-checkbox>
            </div>
            <div class="col-md-5">
              <ash-textbox
                heading="RSS"
                helpText="Enter RSS Feed for organization. Leave blank if none"
              ></ash-textbox>
            </div>
            <div class="col-md-1">
              <ash-checkbox heading="Show" idName="display_rss" :value="false"></ash-checkbox>
            </div>
          </div>
        </fieldset>
        <fieldset>
          <qt-target-audience type="organization" verb="participate in"></qt-target-audience>
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
import TargetAudience from '../generalComponents/targetAudience.vue'
import Textbox from '../../formElements/textbox.vue'
import Password from '../../formElements/password.vue'
import Select from '../../formElements/select.vue'
import Textarea from '../../formElements/textarea.vue'
import Checkbox from '../../formElements/checkbox.vue'

export default {
  methods: {
    submitForm() {
      this.$store.dispatch('submitRegisterOrganizationForm')
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
    organizationRegistered() {
      return this.$store.getters.getOrganizationRegistered
    }
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
