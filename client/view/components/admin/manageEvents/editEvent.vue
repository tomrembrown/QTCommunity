<template>
  <div class="container embed-form">
    <form action class="sky-form form-sizing-reset" ref="form">
      <header>Create New Event</header>

      <qt-main-information :formName="formName"></qt-main-information>
      <qt-place :formName="formName"></qt-place>
      <qt-registration :formName="formName"></qt-registration>

      <fieldset>
        <div class="row align-items-center">
          <div class="col-md-12">
            <h2>Target Audience for Event</h2>
          </div>
        </div>

        <qt-target-audience type="event" verb="attend" :formName="formName"></qt-target-audience>
      </fieldset>

      <footer>
        <button type="submit" class="button" @click.prevent="submitForm">Submit</button>
        <button type="reset" class="button button-secondary" @click="resetForm">Reset</button>
      </footer>
    </form>
  </div>
</template>

<script>
import { forms } from '../../../../../joint/dataValidation/general/formsAndTable'
import MainInformation from './mainInformation.vue'
import Place from '../managePlaces/placeDetails.vue'
import Organization from '../editOrganization/organization.vue'
import Registration from './registration.vue'
import TargetAudience from '../generalComponents/targetAudience.vue'

export default {
  methods: {
    setThisForm() {
      this.$store.commit('setThisForm', this.formName)
    },
    submitForm() {
      //if(this.$refs.form.checkValidity()){
      const payload = {
        element: this.formName + '__organization_id',
        value: this.$store.getters.getOrganizationID
      }
      this.$store.commit('setElement', payload)

      let $this = this
      this.$store.dispatch('submitForm').then(itWorked => {
        if (itWorked) {
          $this.registerOrganizationFormSubmittedOK = true
          this.$emit('submitted')
          this.$refs.form.reset()
          this.$store.commit('resetAllForms')
        }
      })
      /* }
	  else{
		  this.$refs.form.reportValidity();
	  } */
    },
    resetForm() {
      this.$refs.form.reset()
      this.$store.commit('resetAllForms')
    }
  },
  computed: {
    formName() {
      return forms.ADD_EVENT
    }
  },
  components: {
    'qt-main-information': MainInformation,
    'qt-place': Place,
    'qt-organization': Organization,
    'qt-registration': Registration,
    'qt-target-audience': TargetAudience
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
</style>
