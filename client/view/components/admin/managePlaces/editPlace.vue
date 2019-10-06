<template>
  <div class="container embed-form">
    <form action class="sky-form form-sizing-reset" ref="form">
      <div v-if="addPlaceFormSubmittedOK">
        <header>Place Added Successfully</header>
      </div>
      <div v-else>
        <header>Add Place</header>
        <fieldset>
          <div class="row">
            <div class="col-md-12">
              <ash-textbox
                heading="Name"
                :idName="formName + '__name'"
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
                    types=""
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
          <qt-target-audience
            :formName = "formName" 
            type="place" 
            verb="enter"
          ></qt-target-audience>
          <div class="row">
            <div class="col-md-6">
            <ash-select
              heading="Is this place wheelchair-accessible?"
              :idName="formName + '__wheelchair_choice_id'"
              table="wheelchair_choices"
            ></ash-select>
            </div>
            <div class="col-md-6">
              <ash-textbox
                heading="Details of accessibility"
                :idName="formName + '__wheelchair_text'"
                helpText="Enter details if only partially wheelchair accessible"
              ></ash-textbox>
            </div>
          </div>
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
import VueGoogleAutocomplete from 'vue-google-autocomplete'
import TargetAudience from '../generalComponents/targetAudience.vue'
import Checkbox from '../../formElements/checkbox.vue'
import Textbox from '../../formElements/textbox.vue'
import Select from '../../formElements/select.vue'

export default {
  data() {
    return {
      address: null,
      addPlaceFormSubmittedOK: false
    }
  },
  components: {
    VueGoogleAutocomplete,
    'qt-target-audience': TargetAudience,
    'ash-checkbox': Checkbox,
    'ash-textbox': Textbox,
    'ash-select': Select
  },
  computed: {
    formName() {
      return forms.ADD_PLACE
    }
  },
  methods: {
    getAddressData(addressData, placeResultData, id) {
      ////https://www.npmjs.com/package/vue-google-autocomplete
      this.address = addressData
      if (placeResultData) {
        let payload = {
          element: this.formName + '__address',
          value: placeResultData.formatted_address
        }
        this.$store.commit('setElement',payload)
        payload = {
          element: this.formName + '__google_places_id',
          value: placeResultData.place_id
        }
        this.$store.commit('setElement',payload)
        payload = {
          element: this.formName + '__latitude',
          value: placeResultData.geometry.location.lat()
        }
        this.$store.commit('setElement',payload)
        payload = {
          element: this.formName + '__longitude',
          value: placeResultData.geometry.location.lng()
        }
        this.$store.commit('setElement',payload)
      }
    },
    setThisForm() {
      this.$store.commit('setThisForm', this.formName)
    },
    submitForm() {
      const payload = {
        element: this.formName + '__organization_id',
        value: this.$store.getters.getOrganizationID
      }
      this.$store.commit('setElement',payload)
      this.$store.dispatch('submitForm')
      
      this.addPlaceFormSubmittedOK = true;
      this.$emit('submitted');
      
      this.$refs.form.reset();
    }
  },  
  mounted() {
    this.setThisForm();
    this.$refs.address.focus();

    let toronto = 	new google.maps.LatLng(43.651070, -79.347015);
    let circle =	new google.maps.Circle({
	    center:toronto,
	    radius:40000
    });
    this.$refs.address.autocomplete.setBounds(circle.getBounds());
    this.$refs.address.autocomplete.setOptions({
	    strictBounds:true
    });
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

@import '../../../scss/general/crudTable';
</style>
