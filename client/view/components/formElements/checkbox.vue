<template>
  <section>
    <label :for="idName" class="checkbox">
      <input
        type="checkbox"
        :name="idName"
        :id="idName"
        v-bind:checked="checked"
        @click="switched()"
      />
      <i></i> {{ heading }}
    </label>
  </section>
</template>

<script>
import { convertHeadingToName } from '../../../utils/convertHeadingToName'

export default {
	data(){
		return{
			checked:true //https://michaelnthiessen.com/avoid-mutating-prop-directly
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
    value: {
      type: Boolean,
      default: true
    }
  },
  mounted(){
	 this.checked = this.value;
  },
  methods: {
    switched() {
      this.checked = !this.checked
      this.$emit('input', this.value)
      this.$store.commit({
        type: 'setElement',
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
