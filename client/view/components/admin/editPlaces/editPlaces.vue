<template>
  <div class="container">
    <h2>Add/Edit Places</h2>
    <ash-place-add></ash-place-add>
  </div>
</template>

<script>
import addPlace from './addPlace.vue'

export default {
  data() {
    return {
    }
  },
  methods: {
  },
  components: {
    'ash-place-add': addPlace
  }
}
</script>

<style lang="scss" scoped></style>
