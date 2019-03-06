<template>
  <section>
    <label class="label" :for="idName">{{ heading }}</label>
    <label class="input">
      <input
        type="text"
        :id="idName"
        :name="idName"
        :aria-describedby="idHelp"
        :placeholder="placeholder"
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
  computed: {
    idHelp: function() {
      return this.idName + "Help";
    }
  }
};
</script>

<style>
</style>
