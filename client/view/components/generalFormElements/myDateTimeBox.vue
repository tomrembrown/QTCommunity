<template>
  <datetime
    type="datetime"
    input-class="my-datetime-class"
    :input-id="myInputId"
  ></datetime>
</template>

<script>
import { Datetime } from 'vue-datetime'

export default {
  props: {
    myInputId: {
      type: String,
      required: true
    }
  },
  components: {
    datetime: Datetime
  }
}
</script>

<style lang="scss">
@import '/node_modules/vue-datetime/dist/vue-datetime.min.css';
@import '../../scss/forms/myDateTimeBox';
</style>
