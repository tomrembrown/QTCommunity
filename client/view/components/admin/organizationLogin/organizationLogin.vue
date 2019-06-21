<template>
  <div class="container">
    <div v-if="isLoggedIn" class="sky-form">
      <header>Organization Logged In Successfully</header>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../scss/forms/form';
@import '../../../scss/forms/header';
</style>
