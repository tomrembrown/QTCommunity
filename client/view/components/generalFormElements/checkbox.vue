<template>
  <section>
    <label :for="idName" class="checkbox">
      <input
        type="checkbox"
        :name="idName"
        :id="idName"
        v-bind:checked="value"
        @click="switched()"
      />
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
    value: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    switched() {
      this.value = !this.value
      this.$emit('input', this.value)
      this.$store.commit({
        type: 'setElement',
        element: this.idName,
        value: this.value
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
