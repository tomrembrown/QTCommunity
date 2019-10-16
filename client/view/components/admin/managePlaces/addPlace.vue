<template>
  <div class="container embed-form">
    <form action class="sky-form form-sizing-reset" ref="form">
      <div v-if="addPlaceFormSubmittedOK">
        <header>Place Added Successfully</header>
      </div>
      <div v-else>
       	<header>Add Place</header>
       	<qt-place-form :formName=formName></qt-place-form>
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
import PlaceForm from './placeForm.vue'

export default {
  data() {
    return {
      addPlaceFormSubmittedOK: false	    
    }
  },
  components: {
    'qt-place-form': PlaceForm
  },
  computed: {
    formName() {
      return forms.ADD_PLACE
    }
  },
  methods: {
    setThisForm() {
      this.$store.commit('setThisForm', this.formName)
    },
    submitForm() {
      const payload = {
        element: this.formName + '__organization_id',
        value: this.$store.getters.getOrganizationID
      }
      this.$store.commit('setElement',payload)
      this.$store.dispatch('submitForm').then(itWorked => {
        if (itWorked){
	      this.addPlaceFormSubmittedOK = true;
	      this.$emit('submitted');
	      
	      this.$refs.form.reset();
	      this.$store.commit('resetAllForms');
		}
      })
    }
  },  
  mounted() {
    this.setThisForm();
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
