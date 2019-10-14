<template>
  <fieldset>
	  <datetime
	    type="datetime"
	    input-class="my-datetime-class"
	    :id="idName"
	    :input-id="idName"
	    use12-hour
      zone="UTC"
      value-zone="UTC"
	    :minute-step="10"
	    v-model="date"
	    @change="updateStore"
	    :min-datetime="startDate"
	  ></datetime>
    <div v-if="isError" class="note error">
      {{ errorMessage }}
    </div>	  
  </fieldset>
</template>

<script>
import { Datetime } from 'vue-datetime'
import moment from 'moment'
import { Settings } from 'luxon'
Settings.defaultLocale = 'en'

export default { 
  data() {
    return {
      date:null
    }
  },
  watch:{
	 date:function(){
	    if(this.date != null && this.date != ""){
		   this.updateStore();
		   this.$emit('dateUpdated', this.date);
	    }
	 }
  },
  props: {
    idName: {
      type: String,
      required:true
    },  
    myInputId: {
      type: String,
      required:true
    },
    startDate:{
	    type:String,
	    default:function(){
	    	return new Date().toISOString();
	    }
    }
  },
  components: {
    datetime: Datetime
  },
  methods: {
    updateStore() {
      const payload = {
        element: this.idName,
        value: this.date
	  }
      this.$store.dispatch('checkErrorAndSetElement', payload)		    
    }
  },
  computed: {
    idHelp() {
      return this.idName + 'Help'
    },
    isError() {
      let thisError =
        this.$store.getters.getError(this.idName).length === 0 ? false : true
      return thisError
    },
    errorMessage() {
      let errorObject = this.$store.getters.getError(this.idName)
      return errorObject[0].message
    }
  }  
}
</script>

<style lang="scss">
@import '/node_modules/vue-datetime/dist/vue-datetime.min.css';
@import '../../scss/forms/myDateTimeBox';
</style>
