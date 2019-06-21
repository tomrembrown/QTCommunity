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
            <select id="place" name="place" @change="onChangePlace($event)">
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

    <transition name="fade">
      <div v-if="newPlace">
        <div class="row align-items-center">
          <div class="col-md-4">
            <ash-textbox
              heading="Name of Place"
              idName="placeName"
              placeholder="Enter name"
              helpText="Enter a short, unique, name to refer to the place"
            >
            </ash-textbox>
          </div>
          <div class="col-md-8">
            <section>
              <label class="label" for="placeAddress">Address of Place</label>
              <label class="textarea textarea-expandable">
                <textarea
                  id="placeAddress"
                  name="placeAddress"
                  placeholder="Enter address"
                  rows="3"
                >
                </textarea>
              </label>
              <div class="note" id="placeAddressHelp">
                Enter full street address of the place
              </div>
            </section>
          </div>
        </div>

        <qt-target-audience type="place" verb="enter"></qt-target-audience>

        <div class="row align-items-center">
          <div class="col-md-6">
            <section>
              <label for="wheelChairAccessible" class="checkbox">
                <input
                  type="checkbox"
                  name="wheelChairAccessible"
                  id="wheelChairAccessible"
                />
                <i></i>Is place wheel chair accessible?
              </label>
            </section>
          </div>
        </div>
      </div>
    </transition>
  </fieldset>
</template>

<script>
import Textbox from '../../formElements/textbox.vue'
import TargetAudience from '../generalComponents/targetAudience.vue'

export default {
  data() {
    return {
      newPlace: false
    }
  },
  methods: {
    onChangePlace(event) {
      if (event.target.value === 'New') this.newPlace = true
      else this.newPlace = false
    }
  },
  components: {
    'ash-textbox': Textbox,
    'qt-target-audience': TargetAudience
  }
}
</script>

<style lang="scss" scoped>
@import '../../../scss/forms/fade';
@import '../../../scss/forms/section';
@import '../../../scss/forms/label';
@import '../../../scss/forms/select';
@import '../../../scss/forms/checkbox';
@import '../../../scss/forms/select';
@import '../../../scss/forms/textarea';
</style>
