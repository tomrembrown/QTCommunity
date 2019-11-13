<template>
  <div :class="classObject">
    <span class="calendar">{{ day.format('D') }}</span>
    <span class="transition">{{ day.format('dddd - MMM D, YYYY') }}</span>
    
    <ul class="event-list">
      <li
        v-for="event in events"
        :key="event.id"
        :style=" {color: '#' + event.colour }"
        v-b-tooltip.hover="{ html: true }"
        :title="event.tool_tip_title"
      >
        <router-link
          :style=" {color: '#' + event.colour }"
          :to="{ name: 'EventDetails', params: { id: event.id } }"
        >{{ event.short_title_english }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      events: []
    }
  },
  props: ['day'],
  computed: {
    classObject() {
      let today = this.day.isSame(this.$moment(), 'day')
      return {
        day: true,
        today,
        past: this.day.isSameOrBefore(this.$moment(), 'day') && !today,
        'not-current-month':
          this.day.month() + 1 !== this.$store.getters.getCurrentMonth,
        blank: this.events.length == 0
      }
    }
  },
  created() {
    this.$store.subscribe((mutation, state) => {
      if (
        (mutation.type === 'setEvents' ||
          mutation.type === 'changeEventFilter') &&
        state.calendar.filteredEvents != null
      ) {
        this.events = state.calendar.filteredEvents.filter(event =>
          event.start_time.isSame(this.day, 'day')
        )
      }
    })
  }
}
</script>

<style lang="scss" scoped>
@import '../../../scss/calendar/events';
</style>