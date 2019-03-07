<template>
  <div class="container">
    <form action class="sky-form">
      <header>Create New Event</header>

      <qt-main-information></qt-main-information>

      <qt-place></qt-place>

      <qt-organization></qt-organization>

      <qt-registration></qt-registration>

      <fieldset>
        <div class="row align-items-center">
          <div class="col-md-12">
            <h2>Target Audience</h2>
          </div>
        </div>

        <qt-target-audience type="event" verb="attend"></qt-target-audience>

      </fieldset>

      <qt-time-and-date></qt-time-and-date>

      <footer>
        <button type="submit" class="button">Submit</button>
        <button type="reset" class="button button-secondary">Reset</button>
      </footer>
    </form>
  </div>
</template>

<script>
import MainInformation from './mainInformation.vue';
import Place from './place.vue';
import Organization from './organization.vue';
import Registration from './registration.vue';
import TargetAudience from './targetAudience.vue';
import TimeAndDate from './timeAndDate.vue';

export default {
  components: {
    'qt-main-information': MainInformation,
    'qt-place': Place,
    'qt-organization': Organization,
    'qt-registration': Registration,
    'qt-target-audience': TargetAudience,
    'qt-time-and-date': TimeAndDate
  }
};
</script>

<style lang="scss">
@import '/node_modules/vue-datetime/dist/vue-datetime.min.css';
@import '../../scss/forms.scss';
</style>