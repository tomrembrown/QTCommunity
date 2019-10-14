<template>
  <fieldset>
    <div class="row align-items-center">
      <div class="col-md-12">
        <h2>Time and Date</h2>
      </div>
    </div>
<!--    <div class="row align-items-center">
      <div class="col-md-6">
        <section>
          <label class="label" for="startTime">Start Date and Time</label>
          <my-date-time-box myInputId="startTime"></my-date-time-box>
          <div class="note" id="startTimeHelp">
            Enter the start date and time of the event
          </div>
        </section>
      </div>
      <div class="col-md-6">
        <section>
          <label class="label" for="endTime">End Date and Time</label>
          <my-date-time-box myInputId="endTime"></my-date-time-box>
          <div class="note" id="endTimeHelp">
            Enter the end date and time of the event
          </div>
        </section>
      </div>
    </div>
    <div class="row align-items-center">
      <div class="col-md-6">
        <section>
          <label class="label" for="repeats">Event Repeats</label>
          <label class="select">
            <select id="repeats" name="repeats">
              <option value="never">Never</option>
              <option value="weekly">Weekly</option>
              <option value="biweekly">Biweekly</option>
              <option value="twiceMonth">Twice a month</option>
              <option value="monthly">Monthly</option>
            </select>
            <i></i>
          </label>
        </section>
      </div>
    </div>-->
    
    <div class="row align-items-center" :key="index" v-for="(instance, index) in instances">
      <div class="col-md-6">
        <section>
          <label class="label" for="startTime">Start Date and Time</label>
          <my-date-time-box :idName="'startTime' + index"></my-date-time-box>
          <div class="note" id="startTimeHelp">
            Enter the start date and time of the event
          </div>
        </section>
      </div>
      <div class="col-md-6">
        <section>
          <label class="label" for="endTime">End Date and Time</label>
          <my-date-time-box :myInputId="'endTime-' + index"></my-date-time-box>
          <div class="note" id="endTimeHelp">
            Enter the end date and time of the event
          </div>
        </section>
      </div>      
    </div>
    
    <div class="row">
      <div class="col-md-12">
      <button v-on:click.prevent="addTime">Add More Time(s)</button>
      </div>
    </div>
  </fieldset>
</template>

<script>
import MyDateTimeBox from './myDateTimeBox.vue'

export default {
  components: {
    'my-date-time-box': MyDateTimeBox
  },
  data() {
    return {
	  instances:[]
    }
  },
  methods:{
	  addTime(){
		  this.instances.push({});
	  }
  } 
}
</script>

<style lang="scss" scoped>
@import '../../scss/forms/h2';
@import '../../scss/forms/label';
@import '../../scss/forms/select';
@import '../../scss/forms/section';
</style>
