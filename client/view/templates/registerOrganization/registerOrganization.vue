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
              helpText="Enter a login for the organization">
            </ash-textbox>
          </div>
          <div class="col-md-4">
            <ash-password
              heading="Password"
              placeholder="Password"
              helpText="Enter password for organization to login">
            </ash-password>
          </div>
          <div class="col-md-4">
            <ash-password
              heading="Verify Password"
              placeholder="Verify Password"
              helpText="Re-enter password to verify">
            </ash-password>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <ash-textbox
              heading="Name"
              placeholder="Enter name"
              helpText="Enter a short, unique, name to refer to the organization">
            </ash-textbox>
          </div>
          <div class="col-md-6">
            <ash-select
              heading="Type of Organization"
              idName="organizationType"
              table="organization_types">
            </ash-select>
          </div>
        </div>

        <div class="row align-items-center">
          <div class="col-md-12">
            <section>
              <label class="label" for="description_english">Description of Organization</label>
              <label class="textarea textarea-expandable">
                <textarea
                  id="description_english"
                  name="description_english"
                  placeholder="Enter description of organization"
                  rows="5"
                ></textarea>
              </label>
            </section>
          </div>
        </div>

      </fieldset>
      <fieldset>

        <div class="row align-items-center">
          <div class="col-md-3">
            <ash-textbox
              heading="Phone"
              placeholder="(416) 123-4567"
              helpText="Enter organization's phone number">
            </ash-textbox>
          </div>
          <div class="col-md-2">
            <ash-textbox
              heading="Phone Extension"
              helpText="Phone extension. Blank if none">
            </ash-textbox>
          </div>
          <div class="col-md-1">
            <section>
              <label for="show_phone" class="checkbox">
                <input type="checkbox" name="show_phone" id="show_phone" checked>
                <i></i>Show
              </label>
            </section>
          </div>
          <div class="col-md-6">
            <ash-textbox
              heading="Image"
              helpText="Enter web address for logo for organization.  Leave blank if none">
            </ash-textbox>
          </div>
        </div>

        <div class="row align-items-center">
          <div class="col-md-5">
            <ash-textbox
              heading="Email"
              helpText="Enter email address for organization.  Leave blank if none">
            </ash-textbox>
          </div>
          <div class="col-md-1">
            <section>
              <label for="show_email" class="checkbox">
                <input type="checkbox" name="show_email" id="show_email" checked>
                <i></i>Show
              </label>
            </section>
          </div>
          <div class="col-md-5">
            <ash-textbox
              heading="Website"
              helpText="Enter website for organization. Leave blank if none">
            </ash-textbox>
          </div>
          <div class="col-md-1">
            <section>
              <label for="show_website" class="checkbox">
                <input type="checkbox" name="show_website" id="show_website" checked>
                <i></i>Show
              </label>
            </section>
          </div>
        </div>

        <div class="row align-items-center">
          <div class="col-md-5">
            <ash-textbox
              heading="Facebook"
              helpText="Enter facebook page for organization. Leave blank if none">
            </ash-textbox>
          </div>
          <div class="col-md-1">
            <section>
              <label for="show_facebook" class="checkbox">
                <input type="checkbox" name="show_facebook" id="show_facebook" checked>
                <i></i>Show
              </label>
            </section>
          </div>
          <div class="col-md-5">
            <ash-textbox
              heading="Twitter"
              helpText="Enter twitter handle for organization. Leave blank if none">
            </ash-textbox>
          </div>
          <div class="col-md-1">
            <section>
              <label for="show_twitter" class="checkbox">
                <input type="checkbox" name="show_twitter" id="show_twitter" checked>
                <i></i>Show
              </label>
            </section>
          </div>
        </div>

        <div class="row align-items-center">
          <div class="col-md-5">
            <ash-textbox
              heading="LinkedIn"
              helpText="Enter LinkedIn address for organization. Leave blank if none">
            </ash-textbox>
          </div>
          <div class="col-md-1">
            <section>
              <label for="show_linkedin" class="checkbox">
                <input type="checkbox" name="show_linkedin" id="show_linkedin" checked>
                <i></i>Show
              </label>
            </section>
          </div>
        </div>

      </fieldset>
      <fieldset>

        <qt-target-audience type="organization" verb="participate in"></qt-target-audience>

      </fieldset>

      <footer>
        <button 
          type="submit" 
          class="button"
          @click.prevent="submitForm">
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

export default {
  methods: {
    submitForm() {
      console.log("In Create ")
      this.$store.commit('submitRegisterOrganizationForm')
    }
  },
  components: {
    'ash-textbox': Textbox,
    'ash-password': Password,
    'qt-target-audience': TargetAudience,
    'ash-select': Select
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