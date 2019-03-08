<template>
  <fieldset>
    <div class="row align-items-center">
      <div class="col-md-12">
        <h2>Time and Date</h2>
      </div>
    </div>
    <div class="row align-items-center">
      <div class="col-md-6">
        <section>
          <datetime type="datetime" input-class="myInput" input-id="startTime">
            <label for="startTime" slot="before" class="label">Start Date and Time</label>
            <div
              class="note"
              id="startTimeHelp"
              slot="after"
            >Enter the start date and time of the event</div>
          </datetime>
        </section>
      </div>
      <div class="col-md-6">
        <section>
          <datetime type="datetime" input-class="myInput" input-id="endTime">
            <label for="endTime" slot="before" class="label">End Date and Time</label>
            <div class="note" id="endTimeHelp" slot="after">Enter the end date and time of the event</div>
          </datetime>
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
    </div>
  </fieldset>
</template>

<script>
import { Datetime } from 'vue-datetime';

export default {
  components: {
    'datetime': Datetime
  }
};
</script>

<style lang="scss">
  @import '/node_modules/vue-datetime/dist/vue-datetime.min.css';
</style>
