<template>
  <div class="container">
    <div class="sky-form form-sizing-reset">
      <header>
        <div class="row">
          <div class="col-md-12">{{ event.long_title_english }}</div>
        </div>
      </header>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    event() {
      return this.$store.getters.getEvents.find(
        event => event.id === this.$route.params.id
      )
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../scss/forms/form';
@import '../../../scss/forms/header';
@import '../../../scss/lists/organizationList';
</style>