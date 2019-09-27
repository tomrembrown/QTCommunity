<template>
  <div :class="classObject">
    {{ day.format('D') }}
    <ul class="event-list">
      <li v-for="event in events" :key="event.id">{{ event.short_title_english }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['day'],
  computed: {
    events() {
      return this.$store.getters.getEvents.filter(
        event =>
          event.start_time.isSameOrBefore(this.day, 'day') &&
          event.end_time.isSameOrAfter(this.day, 'day')
      )
    },
    classObject() {
      let today = this.day.isSame(this.$moment(), 'day')
      return {
        day: true,
        today,
        past: this.day.isSameOrBefore(this.$moment(), 'day') && !today,
        'not-current-month':
          this.day.month() + 1 !== this.$store.getters.getCurrentMonth
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../scss/calendar/events';
</style>