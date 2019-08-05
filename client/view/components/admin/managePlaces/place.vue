<template>
  <fieldset>
    <div class="row align-items-center">
      <div class="col-md-12">
        <h2>Place / Time</h2>
      </div>
    </div>

    <div class="row" v-for="(instance, index) in instances">
      <div class="col-md-2">
        <ash-select :idName="formName + '__place_id__' + index" heading="Location Where Event is Held" table="places">
        </ash-select>
      </div>
      <div class="col-md-3">
        <ash-textbox
          heading="Room in Place"
           :idName="formName + '__place_room__' + index"
          helpText="Enter specific room in location where event is held. Leave blank if unknown or not applicable."
        ></ash-textbox>
      </div>
      <div class="col-md-3">
        <section>
          <label class="label" for="startTime">Start Date and Time</label>
          <ash-datetime :idName="formName + '__place_start__' + index" :myInputId="'startTime' + index"></ash-datetime>
          <div class="note" id="startTimeHelp">
            Enter the start date and time of the event
          </div>
        </section>
      </div>
      <div class="col-md-3">
        <section>
          <label class="label" for="endTime">End Date and Time</label>
          <ash-datetime :idName="formName + '__place_end__' + index" :myInputId="'endTime-' + index"></ash-datetime>
          <div class="note" id="endTimeHelp">
            Enter the end date and time of the event
          </div>
        </section>
      </div> 
      
      <div class="col-md-1" v-if="index > 0">
        <button class="button" v-on:click.prevent="removeTime(index)">Remove</button>
      </div>            
    </div>
    
    <div class="row">
      <div class="col-md-12">
      <button class="button" v-on:click.prevent="addTime">Add More Time(s)</button>
      </div>
    </div>      
      
    </div>


  </fieldset>
</template>

<script>
import axios from 'axios'

import Textbox from '../../formElements/textbox.vue'
import Select from '../../formElements/select.vue'
import MyDateTimeBox from '../../formElements/myDateTimeBox.vue'

//import TargetAudience from '../generalComponents/targetAudience.vue'
import { convertHeadingToName } from '../../../../utils/convertHeadingToName'

export default {
  data() {
    return {
      instances:[]
    }
  },  
  props: {
    formName: {
      type: String,
      required: true
    },
  },
  mounted(){
      this.addTime();
  },
  methods: {
    addTime(){
	  this.instances.push({});
    },
    removeTime(removeAt){
	  this.instances.splice(removeAt, 1);
    }    
  },
  components: {
    'ash-textbox': Textbox,
    'ash-select': 	Select,
    'ash-datetime': MyDateTimeBox
    //'qt-target-audience': TargetAudience
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
