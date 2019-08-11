<template>
  <fieldset>
    <div class="row">
      <div class="col-md-6">
        <ash-textbox
          heading="Name"
          :idName="formName + '__name'"
          placeholder="Enter name"
          helpText="A short, unique, name to refer to the organization"
        ></ash-textbox>
      </div>
      <div class="col-md-6">
        <ash-select
          heading="Type of Organization"
          :idName="formName + '__organization_type_id'"
          table="organization_types"
        ></ash-select>
      </div>
    </div>

    <div class="row align-items-center">
      <div class="col-md-12">
        <ash-textarea
          heading="Description of Organization"
          :idName="formName + '__description_english'"
          placeholder="Enter description of organization"
        ></ash-textarea>
      </div>
    </div>
  </fieldset>
</template>

<script>
import Textbox from '../../formElements/textbox.vue'
import Select from '../../formElements/select.vue'
import Textarea from '../../formElements/textarea.vue'

export default {
  props: {
    formName: {
      type: String,
      required: true
    }
  },
  components: {
    'ash-textbox': Textbox,
    'ash-select': Select,
    'ash-textarea': Textarea
  }
}
</script>


<style lang="scss" scoped>
@import '../../../scss/forms/section';
@import '../../../scss/forms/fieldset';
</style>