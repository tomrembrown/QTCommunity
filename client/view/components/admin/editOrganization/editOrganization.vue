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
import TargetAudience from '../generalComponents/targetAudience.vue'
import Textbox from '../../formElements/textbox.vue'
import Password from '../../formElements/password.vue'
import Select from '../../formElements/select.vue'
import Textarea from '../../formElements/textarea.vue'
import Checkbox from '../../formElements/checkbox.vue'

export default {
  data() {
    return {
      editOrganizationFormSubmittedOK: false,
      initialData: {}
    }
  }, 
  methods: {
    setThisForm() {
      this.$store.commit('setThisForm', this.formName)
    },
    getData() {
      console.log('in getData')
      let $this = this
      this.$store.dispatch('loadInitialData', this.formName).then(initialData => {
        console.log('Returned from loadInitialData')
        console.log(initialData)
        $this.initialData = initialData
      })
    },
    submitForm() {
      let $this = this
      this.$store.dispatch('submitForm').then(itWorked => {
        if (itWorked) $this.editOrganizationFormSubmittedOK = true
      })
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
  created() {
    console.log('In created hook')
    this.getData()
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