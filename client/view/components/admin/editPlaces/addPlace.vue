<template>
  <form class="sky-form form-sizing-reset">
	  <header>Add Place</header>
	  <fieldset>
		  <div class="row">
			  <section>
			    <label for="places" class="label">Address</label>
			    <label class="input" id="places-wrapper">
				  <vue-google-autocomplete
				  	ref=				"address"
				  	id=					"places"
				  	placeholder=		"Please enter your address"
				  	v-on:placechanged=	"getAddressData"
				  	country=			"ca"
				  >
				  </vue-google-autocomplete>
			    </label>
			  </section>
		  </div>
	  </fieldset>
	  <fieldset>
		  <div class="row">
			  <section>
				  <qt-target-audience type="this place" verb="enter"></qt-target-audience>	  
			  </section>
		  </div>
		  <div class="row">
			  <section>
				  <ash-checkbox heading="Is this place wheelchair-accessible?" idName="wheelchair-accessible"></ash-checkbox>
			  </section>
		  </div>
	  </fieldset>
        <footer>
          <button type="submit" class="button" @click.prevent="submitForm">Submit</button>
          <button type="reset" class="button button-secondary">Reset</button>
        </footer>	  
  </form>
</template>

<script>
import VueGoogleAutocomplete from 'vue-google-autocomplete';
import TargetAudience from '../generalComponents/targetAudience.vue'
import Checkbox from '../../formElements/checkbox.vue'

export default {
  data() {
    return {
      address:'',
      longitude:'',
      latitude:'',
      google_places_id:'',
    }
  },
  components:{
	VueGoogleAutocomplete,
    'qt-target-audience': TargetAudience,
    'ash-checkbox': Checkbox	
  },
  mounted(){
	  this.$refs.address.focus();
  },
  methods: {
    getAddressData(addressData, placeResultData, id) {
	    ////https://www.npmjs.com/package/vue-google-autocomplete
	    this.address = addressData;
	    debugger;
	    console.log(addressData);
	    console.log(placeResultData);
	    console.log(id);
    },
    submitForm() {
      this.$store.dispatch('submitRegisterOrganizationForm')
    }
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
@import '../../../scss/forms/input';
@import '../../../scss/forms/note';

section,
#places-wrapper,
#places{
	width:100%;
}
</style>
