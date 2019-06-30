<template>
  <div class="container">
    <form class="sky-form form-sizing-reset">
      <header>Add Place</header>
      <fieldset>
        <div class="row">
          <div class="col-md-12">
            <ash-textbox
              heading="Name"
              placeholder="Enter name"
              helpText="Enter a short, unique, name to refer to the place"
            ></ash-textbox>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <section>
              <label for="places" class="label">Address</label>
              <label class="input" id="places-wrapper">
                <vue-google-autocomplete
                  ref="address"
                  id="places"
                  placeholder="Please enter your address"
                  @placechanged="getAddressData"
                  country="ca"
                ></vue-google-autocomplete>
              </label>
            </section>
          </div>
        </div>
      </fieldset>
      <fieldset>
        <qt-target-audience type="this place" verb="enter"></qt-target-audience>
        <div class="row">
          <ash-checkbox
            heading="Is this place wheelchair-accessible?"
            idName="wheelchair_accessible"
          ></ash-checkbox>
        </div>
      </fieldset>
      <footer>
        <button type="submit" class="button" @click.prevent="submitForm">Submit</button>
        <button type="reset" class="button button-secondary">Reset</button>
      </footer>
    </form>
  </div>
</template>

<script>
import VueGoogleAutocomplete from 'vue-google-autocomplete'
import TargetAudience from '../generalComponents/targetAudience.vue'
import Checkbox from '../../formElements/checkbox.vue'
import Textbox from '../../formElements/textbox.vue'

export default {
  data() {
    return {
      address: '',
      longitude: '',
      latitude: '',
      google_places_id: ''
    }
  },
  components: {
    VueGoogleAutocomplete,
    'qt-target-audience': TargetAudience,
    'ash-checkbox': Checkbox,
    'ash-textbox': Textbox
  },
  mounted() {
    this.$refs.address.focus()
  },
  methods: {
    getAddressData(addressData, placeResultData, id) {
      ////https://www.npmjs.com/package/vue-google-autocomplete
      this.address = addressData
      debugger
      console.log(addressData)
      console.log(placeResultData)
      console.log(id)
    },
    submitForm() {
      this.$store.dispatch('submitPlaceForm')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../scss/forms/form';
@import '../../../scss/forms/header';
@import '../../../scss/forms/fieldset';
@import '../../../scss/forms/footer';
@import '../../../scss/forms/buttons';
@import '../../../scss/forms/section';
@import '../../../scss/forms/label';
@import '../../../scss/forms/checkbox';
@import '../../../scss/forms/input';
@import '../../../scss/forms/note';
</style>
