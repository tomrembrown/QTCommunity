<template>
  <div class="container">
    <form action class="sky-form form-sizing-reset">
      <div v-if="editOrganizationFormSubmittedOK">
        <header>Organization Data Changed Successfully</header>
      </div>
      <div v-else>
        <header>Edit Organization</header>
        <fieldset>
          <div class="row">
            <div class="col-md-6">
              <ash-textbox
                heading="Name"
                :idName="formName + '__name'"
                placeholder="Enter name"
                helpText="A short, unique, name to refer to the organization"
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
                helpText="Organization's phone number"
              ></ash-textbox>
            </div>
            <div class="col-md-2">
              <ash-textbox 
                heading="Phone Extension"
                :idName="formName + '__phone_extension'"
                helpText="Blank if none"
              ></ash-textbox>
            </div>
            <div class="col-md-1">
              <ash-checkbox 
                heading="Show" 
                :idName="formName + '__display_phone'" 
                :value="false"
              ></ash-checkbox>
            </div>
            <div class="col-md-6">
              <ash-textbox
                heading="Image Link"
                :idName="formName + '__image_link'"
                helpText="Web address for logo for organization.  Mandatory field"
              ></ash-textbox>
            </div>
          </div>

          <div class="row align-items-center">
            <div class="col-md-5">
              <ash-textbox
                heading="Email"
                :idName="formName + '__email'"
                helpText="Email address for organization.  Leave blank if none"
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
                helpText="Website for organization. Leave blank if none"
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
                helpText="Facebook page for organization. Leave blank if none"
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
                helpText="Twitter webpage for organization. Leave blank if none"
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
                helpText="YouTube address for organization. Leave blank if none"
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
                helpText="Instagram address for organization. Leave blank if none"
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
                helpText="LinkedIn address for organization. Leave blank if none"
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
                helpText="Pinterest address for organization. Leave blank if none"
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
                helpText="Google+ address for organization. Leave blank if none"
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
                helpText="RSS Feed for organization. Leave blank if none"
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
import axios from 'axios'
import authenticationStore from '../../../../presentationLogic/store/modules/authentication'
import allFormsGeneralStore from '../../../../presentationLogic/store/modules/allFormsGeneral'
import TargetAudience from '../generalComponents/targetAudience.vue'
import Textbox from '../../formElements/textbox.vue'
import Password from '../../formElements/password.vue'
import Select from '../../formElements/select.vue'
import Textarea from '../../formElements/textarea.vue'
import Checkbox from '../../formElements/checkbox.vue'

export default {
  data() {
    return {
      editOrganizationFormSubmittedOK: false
    }
  }, 
  /**
   * This code is used to populate the data in the form. beforeRouteEnter is called
   * when this route is first selected. It runs before the route starts processing or 
   * displaying - the old route information is present while this is running. 
   * Note that when this is called none of the data() for this component have yet
   * been initialized
   */
  beforeRouteEnter (to, from, next) {
    const formName = forms.EDIT_ORGANIZATION
    const organizationID = authenticationStore.state.organizationID
    // Read form data for this form and this organization from server
    axios.get('readRoutesServer/readForm/' + formName + '/' + organizationID).
      then(formData => {
        // Loop through data returned and put it in the store - the data() for
        // this component is not yet initialized - but the store is
        for (const [key, value] of Object.entries(formData.data)) {
          allFormsGeneralStore.state.formElements[formName + '__' + key] =
            value
        }
        // Calling next() causes the rest of this component to start processing
        // The information is in the store, so each element (text-box, checkbox, 
        // etc...) will check when it is called if there is a default or not
        next()
      })
  },
  methods: {
    setThisForm() {
      this.$store.commit('setThisForm', this.formName)
    },
    getData() {
      let $this = this
      this.$store.dispatch('loadInitialData', this.formName)
    },
    submitForm() {
      let $this = this
      this.$store.dispatch('submitForm').then(itWorked => {
        if (itWorked) $this.editOrganizationFormSubmittedOK = true
      })
    },
    setData(initialData) {
      console.log('In setData, initialData: ')
      console.log(initialData)
      for (const [key, value] of Object.entries(initialData)) {
        this.initialData[key] = value
      }
      console.log('Internal initial data: ')
      console.log(this.initialData)
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
    formName() {
      return forms.EDIT_ORGANIZATION
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