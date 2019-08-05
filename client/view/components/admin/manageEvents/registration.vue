<template>
  <fieldset>
    <div class="row">
      <div class="col-md-6">
        <h2>Registration</h2>
      </div>

      <div class="col-md-6">
        <section>
          <label for="requireRegistration" class="checkbox">
            <ash-checkbox
              :idName="formName + '__need_registration'"
              heading="Event Requires Registration"
              value=false
              v-model="isRegistrationRequired"
            />
          </label>
        </section>
      </div>
    </div>

    <transition name="fade">
      <div class="row" v-if="isRegistrationRequired">
        <div class="col-md-6">
          <ash-textbox
          	:idName="formName + '__website_english'"
            heading="Registration Website"
            placeholder="Enter registration website"
            helpText="Enter website for users to register for event. Leave blank if no registration needed or website not known."
          >
          </ash-textbox>
        </div>

        <div class="col-md-6">
          <ash-textbox
            :idName="formName + '__price'"
            heading="Price"
            helpText="Enter price of event. Leave blank if unknown"
          >
          </ash-textbox>
        </div>
      </div>
    </transition>
  </fieldset>
</template>

<script>
import Textbox from '../../formElements/textbox.vue'
import Checkbox from '../../formElements/checkbox.vue'

export default {
  data() {
    return {
      isRegistrationRequired: false
    }
  },
  props: {
    formName: {
      type: String,
      required: true
    },
  },  
  components: {
    'ash-textbox': Textbox,
    'ash-checkbox': Checkbox,
  }
}
</script>

<style lang="scss" scoped>
@import '../../../scss/forms/fade';
@import '../../../scss/forms/h2';
@import '../../../scss/forms/section';
@import '../../../scss/forms/checkbox';
</style>
