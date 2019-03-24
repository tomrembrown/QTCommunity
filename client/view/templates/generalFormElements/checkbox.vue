<template>
    <section>
    <label :for="idName" class="checkbox">
      <input 
        type="checkbox" 
        :name="idName" 
        :id="idName" 
        v-bind:checked="checked">
      <i></i> {{ heading }}
    </label>
  </section>
</template>

<script>
import { convertHeadingToName } from './convertHeadingToName'

export default {
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
    checked: {
      type: Boolean,
      default: true
    }
  }, 
  methods: {
    updateStore() {
      this.$store.commit({
        type: 'setCheckboxElement',
        element: this.idName,
        value: this.checked
      })
    }
  }
}
</script>

<style lang="scss">
  @import '../../scss/forms/label';  
  @import '../../scss/forms/checkbox';
  @import '../../scss/forms/section';
</style>
