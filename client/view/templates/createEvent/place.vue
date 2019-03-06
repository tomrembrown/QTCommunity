<template>
  <fieldset>
    <div class="row align-items-center">
      <div class="col-md-12">
        <h2>Place</h2>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <section>
          <label class="label" for="place">Location Where Event is Held</label>
          <label class="select">
            <select id="place" name="place">
              <option value="1">The 519</option>
              <option value="2">Buddies in Bad Times Theatre</option>
              <option value="3">Spa Excess</option>
              <option value="4">Steam Works</option>
              <option value="5">The Black Eagle</option>
              <option value="New">Enter New Place</option>
            </select>
            <i></i>
          </label>
        </section>
      </div>
      <div class="col-md-6">
        <ash-textbox
          heading="Room in Place"
          idName="roomPlace"
          helpText="Enter specific room in location where event is held. Leave blank if unknown or not applicable."
        ></ash-textbox>
      </div>
    </div>

    <div v-if="newPlace">
      
    </div>

  </fieldset>
</template>

<script>
import Textbox from './textbox.vue';

export default {
  data() {
    return {
      newPlace: false
    }
  },
  components: {
    'ash-textbox': Textbox
  }
};
</script>

<style>

</style>
