<template>
  <div class="container">
    <form action class="sky-form form-sizing-reset">
      <header>Create New Event</header>

      <qt-main-information></qt-main-information>

      <qt-place></qt-place>

      <qt-organization></qt-organization>

      <qt-registration></qt-registration>

      <fieldset>
        <div class="row align-items-center">
          <div class="col-md-12">
            <h2>Target Audience for Event</h2>
          </div>
        </div>

        <qt-target-audience type="event" verb="attend"></qt-target-audience>
      </fieldset>

      <qt-time-and-date></qt-time-and-date>

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
import MainInformation from './mainInformation.vue'
import Place from '../places/place.vue'
import Organization from '../editOrganization/organization.vue'
import Registration from './registration.vue'
import TargetAudience from '../generalComponents/targetAudience.vue'
import TimeAndDate from '../../formElements/timeAndDate.vue'

export default {
  methods: {
    submitForm() {
      console.log('In Create Event')
      this.$store.commit('submitForm')
    }
  },
  components: {
    'qt-main-information': MainInformation,
    'qt-place': Place,
    'qt-organization': Organization,
    'qt-registration': Registration,
    'qt-target-audience': TargetAudience,
    'qt-time-and-date': TimeAndDate
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
