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
          heading="Long Title"
          placeholder="Enter long title"
          helpText="The title to display in detailed lists."
        ></ash-textbox>
      </div>
    </div>

    <div class="row align-items-center">
      <div class="col-md-6">
        <ash-textbox
          heading="Short Title"
          placeholder="Enter short title"
          helpText="The title to display in the calendar on desktops and laptops."
        ></ash-textbox>
      </div>
      <div class="col-md-6">
        <ash-textbox
          heading="Mobile Title"
          placeholder="Enter mobile title"
          helpText="The title to display on cell phones."
        ></ash-textbox>
      </div>
    </div>

    <div class="row align-items-center">
      <div class="col-md-12">
        <section>
          <label class="label" for="decription">Description</label>
          <label class="textarea textarea-expandable">
            <textarea
              id="description"
              name="description"
              placeholder="Enter description of event"
              rows="5"
            ></textarea>
          </label>
        </section>
      </div>
    </div>

    <div class="row align-items-center">
      <div class="col-md-6">
        <ash-textbox
          heading="Image Link"
          placeholder="Enter link to image for event"
          helpText="A link to an image to display next to event in detailed description screen."
        ></ash-textbox>
      </div>
      <div class="form-group col-md-6">
        <ash-textbox
          heading="Website"
          placeholder="Enter primary website for event"
          helpText="Enter the primary website or facebook page describing the event. Leave blank if none."
        ></ash-textbox>
      </div>
    </div>
  </fieldset>
</template>

<script>
import Textbox from './textbox.vue';

export default {
  components: {
    'ash-textbox': Textbox
  }
};
</script>

<style>
</style>
