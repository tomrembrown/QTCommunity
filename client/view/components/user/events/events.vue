<template>
  <div id="outer" class="container">
    <div id="header">
      <div>
        <h1>Events</h1>
      </div>
      <div>
        <current-month></current-month>
      </div>
    </div>
    <div id="day-bar">
      <div>Mon</div>
      <div>Tue</div>
      <div>Wed</div>
      <div>Thu</div>
      <div>Fri</div>
      <div>Sat</div>
      <div>Sun</div>
    </div>
    <div id="calendar">
      <div v-for="weekObject in weeks" :key="weekObject.weekNumber" class="calendar-week">
        <calendar-day v-for="day in weekObject.week" :key="day.format()" :day="day">
        </calendar-day>
      </div>
    </div>
  </div>
</template>

<script>
import CalendarDay from './CalendarDay.vue'
import CurrentMonth from './CurrentMonth.vue'

export default {
  computed: {
    month() {
      return this.$store.getters.getCurrentMonth
    },
    year() {
      return this.$store.getters.getCurrentYear
    },
    days() {
      return this.$store.getters.getDays
    },
    weeks() {
      let weeks = []
      let week = []
      let weekObject = {}

      let weekNumber = 0

      for (let day of this.days) {
        week.push(day)
        if (week.length === 7) {
          weekObject = {
            weekNumber,
            week
          }
          weeks.push(weekObject)
          weekNumber ++
          week = []
        }
      }

      return weeks
    }
  },
  components: {
    CalendarDay,
    CurrentMonth
  }
}
</script>

<style lang="scss" scoped>
@import '../../../scss/calendar/events';
</style>
