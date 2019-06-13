<template>
  <div class="container">
    <form action class="sky-form form-sizing-reset">
      <header>Register Organization</header>
      <fieldset>
        <div class="row">
          <div class="col-md-4">
            <ash-textbox
              heading="Login"
              placeholder="Login"
              helpText="Enter a login for the organization"
            >
            </ash-textbox>
          </div>
          <div class="col-md-4">
            <ash-password
              heading="Password"
              placeholder="Password"
              helpText="Enter password for organization to login"
            >
            </ash-password>
          </div>
          <div class="col-md-4">
            <ash-password
              heading="Verify Password"
              placeholder="Verify Password"
              helpText="Re-enter password to verify"
            >
            </ash-password>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <ash-textbox
              heading="Name"
              placeholder="Enter name"
              helpText="Enter a short, unique, name to refer to the organization"
            >
            </ash-textbox>
          </div>
          <div class="col-md-6">
            <ash-select
              heading="Type of Organization"
              idName="organization_type_id"
              table="organization_types"
            >
            </ash-select>
          </div>
        </div>

        <div class="row align-items-center">
          <div class="col-md-12">
            <ash-textarea
              heading="Description of Organization"
              idName="description_english"
              placeholder="Enter description of organization"
            >
            </ash-textarea>
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
            >
            </ash-textbox>
          </div>
          <div class="col-md-2">
            <ash-textbox
              heading="Phone Extension"
              helpText="Phone extension. Blank if none"
            >
            </ash-textbox>
          </div>
          <div class="col-md-1">
            <ash-checkbox heading="Show" idName="display_phone" :value="false">
            </ash-checkbox>
          </div>
          <div class="col-md-6">
            <ash-textbox
              heading="Image Link"
              helpText="Enter web address for logo for organization.  Mandatory field"
            >
            </ash-textbox>
          </div>
        </div>

        <div class="row align-items-center">
          <div class="col-md-5">
            <ash-textbox
              heading="Email"
              helpText="Enter email address for organization.  Leave blank if none"
            >
            </ash-textbox>
          </div>
          <div class="col-md-1">
            <ash-checkbox heading="Show" idName="display_email" :value="false">
            </ash-checkbox>
          </div>
          <div class="col-md-5">
            <ash-textbox
              heading="Website"
              idName="website_english"
              helpText="Enter website for organization. Leave blank if none"
            >
            </ash-textbox>
          </div>
          <div class="col-md-1">
            <ash-checkbox
              heading="Show"
              idName="display_website"
              :value="false"
            >
            </ash-checkbox>
          </div>
        </div>

        <div class="row align-items-center">
          <div class="col-md-5">
            <ash-textbox
              heading="Facebook"
              helpText="Enter facebook page for organization. Leave blank if none"
            >
            </ash-textbox>
          </div>
          <div class="col-md-1">
            <ash-checkbox
              heading="Show"
              idName="display_facebook"
              :value="false"
            >
            </ash-checkbox>
          </div>
          <div class="col-md-5">
            <ash-textbox
              heading="Twitter"
              helpText="Enter twitter handle for organization. Leave blank if none"
            >
            </ash-textbox>
          </div>
          <div class="col-md-1">
            <ash-checkbox
              heading="Show"
              idName="display_twitter"
              :value="false"
            >
            </ash-checkbox>
          </div>
        </div>

        <div class="row align-items-center">
          <div class="col-md-5">
            <ash-textbox
              heading="LinkedIn"
              helpText="Enter LinkedIn address for organization. Leave blank if none"
            >
            </ash-textbox>
          </div>
          <div class="col-md-1">
            <ash-checkbox
              heading="Show"
              idName="display_linkedin"
              :value="false"
            >
            </ash-checkbox>
          </div>
        </div>
      </fieldset>
      <fieldset>
        <qt-target-audience
          type="organization"
          verb="participate in"
        ></qt-target-audience>
      </fieldset>

      <footer>
        <button type="submit" class="button" @click.prevent="submitForm">
          Submit
        </button>
        <button type="reset" class="button button-secondary">Reset</button>
      </footer>
    </form>
  </div>
</template>

<script>
import Textbox from '../generalFormElements/textbox.vue'
import Password from '../generalFormElements/password.vue'
import TargetAudience from '../generalFormElements/targetAudience.vue'
import Select from '../generalFormElements/select.vue'
import Textarea from '../generalFormElements/textarea.vue'
import Checkbox from '../generalFormElements/checkbox.vue'

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
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/forms/form';
@import '../../scss/forms/header';
@import '../../scss/forms/fieldset';
@import '../../scss/forms/h2';
@import '../../scss/forms/footer';
@import '../../scss/forms/buttons';
@import '../../scss/forms/section';
@import '../../scss/forms/label';
@import '../../scss/forms/select';
@import '../../scss/forms/textarea';
@import '../../scss/forms/checkbox';
</style>
