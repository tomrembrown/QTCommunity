<template>
  <section>
    <label class="label" :for="idName">{{ heading }}</label>
    <label class="select">
      <select :id="idName" :name="idName" v-model="value" @change="updateStore">
        <option
          v-for="thisValue in valuesList"
          :value="thisValue.id"
          :key="thisValue.text"
        >{{ thisValue.text }}</option>
      </select>
      <i></i>
    </label>
  </section>
</template>

<script>
import axios from 'axios'
import { convertHeadingToName } from '../../../utils/convertHeadingToName'

export default {
  data() {
    return {
      value: 1,
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
        })
    }
  },
  computed: {
    idHelp: function() {
      return this.idName + 'Help'
    }
  },
  beforeMount() {
    this.getValuesList()
    this.updateStore()
  }
}
</script>

<style lang="scss">
@import '../../scss/forms/label';
@import '../../scss/forms/select';
@import '../../scss/forms/section';
</style>
