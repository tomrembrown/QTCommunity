<template>
  <div>
    <div>{{ formattedDate }}</div>
    <button @click="dec" class="calendar-button">-</button>
    <button @click="inc" class="calendar-button">+</button>
  </div>
</template>

<script>
export default {
  computed: {
    month() {
      return this.$store.getters.getCurrentMonth
    },
    year() {
      return this.$store.getters.getCurrentYear
    },
    formattedDate() {
      return this.$moment(`${this.year}-${this.month}-1`, 'YYYY-M-D').format('MMMM YYYY')
    }
  },
  methods: {
    dec() {
      this.$store.dispatch('decrementMonth')
    },
    inc() {
      this.$store.dispatch('incrementMonth')
    },
    initial() {
      this.$store.dispatch('initialMonth')
    }
  },
  mounted() {
    this.initial()
  }
}
</script>

<style lang="scss" scoped>
@import '../../../scss/calendar/events';
</style>