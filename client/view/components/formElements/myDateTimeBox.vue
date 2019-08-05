<template>
  <datetime
    type="datetime"
    input-class="my-datetime-class"
    :id="idName"
    :input-id="idName"
    use12-hour=true
    minute-step=15
    v-model="date"
  ></datetime>
</template>

<script>
import { Datetime } from 'vue-datetime'

export default {
  data() {
    return {
      instances:[]
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
  },
  components: {
    datetime: Datetime
  },
  methods: {
    updateStore() {
	    if (this.validate) {
	      const payload = {
	        element: this.idName,
	        value: this.value
		  }
	      this.$store.dispatch('checkErrorAndSetElement', payload)		    
	    }
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
