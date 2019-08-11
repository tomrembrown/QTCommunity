<template>
  <section>
    <label class="label" :for="idName">{{ heading }}</label>
    <label class="select">
      <select :id="idName" :name="idName" v-model="value" @change="updateStore">
        <option disabled value="">Please select one</option>
        <option
          v-for="thisValue in valuesList"
          :value="thisValue.id"
          :key="thisValue.text"
        >{{ thisValue.text }}</option>
      </select>
      <i></i>
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
import axios from 'axios'
import { convertHeadingToName } from '../../../utils/convertHeadingToName'

export default {
  data() {
    return {
      value: "",
      valuesList: []
    }
  },
  props: {
    heading: {
      type: String,
      required: true
    },
    table: {
      type: String,
      required: true
    },
    idName: {
      type: String,
      default: function() {
        return convertHeadingToName(this.heading)
      }
    },
    helpText: {
      type: String,
      default: ''
    }
  },
  methods: {
    updateStore() {
      const payload = {
        element: this.idName,
        value: this.value
      }
      this.$store.dispatch('checkErrorAndSetElement', payload)
    },
    getValuesList() {
      let $this = this
      axios
        .get('readRoutesServer/getValuesList/' + this.table)
        .then(response => {
          $this.valuesList = response.data
          // Checks if something set - i.e. if got data from server
          // Otherwise set the value - this drop-down option selected to first 
          // drop-down option
          if ($this.value == null) {
            $this.value = $this.valuesList[0].id
          }
        })
    }
  },
  computed: {
    idHelp: function() {
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
    // Get values from server for this dropdown
    this.getValuesList()
    // Check in the store if this had something set from the server
    const valueFromStore = this.$store.getters.getValueForElement(this.idName)
    if (valueFromStore) {
      this.value = valueFromStore
    }
  }
}
</script>

<style lang="scss">
@import '../../scss/forms/label';
@import '../../scss/forms/select';
@import '../../scss/forms/section';
</style>
