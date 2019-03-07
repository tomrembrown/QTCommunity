<template>
  <fieldset>
    <div class="row">
      <div class="col-md-6">
        <h2>Registration</h2>
      </div>

      <div class="col-md-6">
        <section>
          <label for="requireRegistration" class="checkbox">
            <input 
              type="checkbox" 
              name="requireRegistration" 
              id="requireRegistration"
              v-model="isRegistrationRequired">
            <i></i>Event Requires Registration
          </label>
        </section>
      </div>
    </div>

    <transition name="fade">
      <div class="row" v-if="isRegistrationRequired">

        <div class="col-md-6">
          <ash-textbox
            heading="Registration Website"
            placeholder="Enter registration website"
            helpText="Enter website for users to register for event. Leave blank if no registration needed or website not known.">
          </ash-textbox>
        </div>

        <div class="col-md-6">
          <ash-textbox
            heading="Price"
            helpText="Enter price of event. Leave blank if unknown">
          </ash-textbox>
        </div>

      </div>

    </transition>
  </fieldset>
</template>

<script>
import Textbox from './textbox.vue';

export default {
  data() {
    return {
      isRegistrationRequired: false
    }
  },
  components: {
    'ash-textbox': Textbox
  }
};
</script>

<style lang="scss">
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
