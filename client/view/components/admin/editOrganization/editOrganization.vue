<template>
  <div class="container">
    <form action class="sky-form form-sizing-reset">
      <div v-if="editOrganizationFormSubmittedOK">
        <header>Organization Data Changed Successfully</header>
      </div>
      <div v-else>
        <header>Edit Organization</header>
        <qt-organization-general-top
          :formName="formName"
        ></qt-organization-general-top>


        <fieldset>
          <div class="row align-items-center">
            <div class="col-md-6">
              <ash-select
                heading="Organization Place"
                :idName="formName + '__place_id'"
                table="places"
                helpText="First create place in Manage Places, then choose here"
              ></ash-select>
            </div>
            <div class="col-md-6">
              <ash-textbox
                heading="Place Room"
                :idName="formName + '__place_room'"
                helpText="Leave blank if not applicable"
              ></ash-textbox>
            </div>
          </div>
        </fieldset>

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
import axios from 'axios'
import authenticationStore from '../../../../presentationLogic/store/modules/authentication'
import allFormsGeneralStore from '../../../../presentationLogic/store/modules/allFormsGeneral'
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
      const payload = {
        element: this.formName + '__organization_id',
        value: this.$store.getters.getOrganizationID
      }
      this.$store.commit('setElement',payload)
      let $this = this
      this.$store.dispatch('submitForm').then(itWorked => {
        if (itWorked) $this.editOrganizationFormSubmittedOK = true
      })
    },
    setData(initialData) {
      for (const [key, value] of Object.entries(initialData)) {
        this.initialData[key] = value
      }
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