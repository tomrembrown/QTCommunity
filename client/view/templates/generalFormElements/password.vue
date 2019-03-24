<template>
  <section>
    <label class="label" :for="idName">{{ heading }}</label>
    <label class="input">
      <input
        type="password"
        :id="idName"
        :name="idName"
        :aria-describedby="idHelp"
        :placeholder="placeholder"
        v-model="value"
        @change="updateStore"
      >
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
        return this.heading.trim().charAt(0).toLowerCase() + 
               this.heading.trim().slice(1).replace(/ /g,"");
      }
    },
    placeholder: String,
    helpText: String
  }, 
  methods: {
    updateStore() {
      this.$store.commit({
        type: 'setPassword',
        element: this.idName,
        value: this.value
      })
    }
  },
  computed: {
    idHelp: function() {
      return this.idName + "Help";
    }
  }
};
</script>

<style lang="scss">
  @import '../../scss/forms/label';  
  @import '../../scss/forms/input';  
  @import '../../scss/forms/note';  
  @import '../../scss/forms/section';
</style>
