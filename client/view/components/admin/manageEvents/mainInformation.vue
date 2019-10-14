<template>
  <fieldset>
    <div class="row align-items-center">
      <div class="col-md-12">
        <h2>Main Information</h2>
      </div>
    </div>

    <div class="row align-items-center">
      <div class="col-md-12">
        <ash-textbox
          :idName="formName + '__long_title_english'"
          heading="Long Title"
          placeholder="Enter long title"
          helpText="The title to display in detailed lists."
        ></ash-textbox>
      </div>
    </div>

    <div class="row align-items-center">
      <div class="col-md-6">
        <ash-textbox
          :idName="formName + '__short_title_english'"
          heading="Short Title"
          placeholder="Enter short title"
          helpText="The title to display in the calendar on desktops and laptops."
        ></ash-textbox>
      </div>
      <div class="col-md-6">
        <ash-textbox
          :idName="formName + '__mobile_title_english'"
          heading="Mobile Title"
          placeholder="Enter mobile title"
          helpText="The title to display on cell phones."
        ></ash-textbox>
      </div>
    </div>

    <div class="row align-items-center">
      <div class="col-md-12">
        <section>
          <label class="textarea textarea-expandable">
            <ash-textarea
              :idName="formName + '__description_english'"
              heading="Description"
              placeholder="Enter description of event"
            ></ash-textarea>
          </label>
        </section>
      </div>
    </div>

    <div class="row">
      <div class="col-md-4">
        <ash-imageupload
          :idName="formName + '__image_link'"
          heading="Image for Event"
          helpText="Upload image to display next to event in detailed description screen."
        ></ash-imageupload>
      </div>
      <div class="form-group col-md-4">
        <ash-textbox
          :idName="formName + '__website_english'"
          heading="Website"
          placeholder="Enter primary website for event"
          helpText="Enter the primary website or facebook page describing the event. Leave blank if none."
        ></ash-textbox>
      </div>
      <div class="form-group col-md-4">
        <ash-select
          :idName="formName + '__category_id'"
          heading="Category of Event"
          table="categories"
        ></ash-select>
      </div>
    </div>
  </fieldset>
</template>

<script>
import Textbox from '../../formElements/textbox.vue'
import Textarea from '../../formElements/textarea.vue'
import ImageUpload from '../../formElements/imageUpload.vue'
import Select from '../../formElements/select.vue'

export default {
  props: {
    formName: {
      type: String,
      required: true
    },
  },	
  components: {
    'ash-textbox': Textbox,
    'ash-textarea': Textarea,
    'ash-imageupload': ImageUpload,
    'ash-select': Select
  } 
}
</script>

<style lang="scss" scoped>
@import '../../../scss/forms/fieldset';
@import '../../../scss/forms/h2';
@import '../../../scss/forms/section';
@import '../../../scss/forms/label';
@import '../../../scss/forms/textarea';
</style>
