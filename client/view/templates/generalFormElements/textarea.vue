<template>
  <section>
    <label class="label" :for="idName">{{ heading }}</label>
    <label class="textarea textarea-expandable">
      <textarea
        :id="idName"
        :name="idName"
        :aria-describedby="idHelp"
        :placeholder="placeholder"
        rows="5"
        v-model.lazy="value"
        @change="updateStore">
      </textarea>
    </label>
    <div 
      v-if="helpText.length>0" 
      class="note" 
      :id="idHelp">
        {{ helpText }}
    </div>
  </section>
</template>

<script>
import { convertHeadingToName } from './convertHeadingToName'

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
    }
  }, 
  methods: {
    updateStore() {
      this.$store.commit({
        type: 'setTextareaElement',
        element: this.idName,
        value: this.value
      })
    }
  },
  computed: {
    idHelp: function() {
      return this.idName + "Help"
    }
  }
}
</script>

<style lang="scss">
  @import '../../scss/forms/label';  
  @import '../../scss/forms/textarea';
  @import '../../scss/forms/note';  
  @import '../../scss/forms/section';
</style>
