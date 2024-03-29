<template>
  <section>
    <label class="label" :for="idName">{{ heading }}</label>
    <label class="input">
      <input
        type="text"
        ref="input"
        :id="idName"
        :name="idName"
        :aria-describedby="idHelp"
        :placeholder="placeholder"
        v-model.lazy="value"
        @blur="updateStore"
        @input="$emit('input', $event.target.value)"
        v-on:keyup.13="$emit('enterPressed')"
      />      
    </label>
    <div v-if="isError" class="note error">
      {{ errorMessage }}
    </div>
    <div v-else-if="helpText.length > 0" class="note" :id="idHelp">
      {{ helpText }}
    </div>
  </section>
</template>

<script>
import { convertHeadingToName } from '../../../utils/convertHeadingToName'

export default {
  data() {
    return {
      value: ''
    }
  },
  props: {
    heading: {
      type: String,
      required: true
    },
    idName: {
      type: String,
      default: function() {
        return convertHeadingToName(this.heading)
      }
    },
    placeholder: {
      type: String,
      default: ''
    },
    helpText: {
      type: String,
      default: ''
    },
    validate: {
	    type: Boolean,
	    default: true
    },
    focus: {
	    type: Boolean,
	    default: false
    }
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
  },
  mounted() {
    // Check in store if this had something set in server
    const valueFromStore = this.$store.getters.getValueForElement(this.idName)
    if (valueFromStore) this.value = valueFromStore
    
    if(this.focus){
	    this.$refs.input.focus();
    }
  }
}
</script>

<style lang="scss">
@import '../../scss/forms/label';
@import '../../scss/forms/input';
@import '../../scss/forms/note';
@import '../../scss/forms/section';
@import '../../scss/forms/buttons';
</style>

