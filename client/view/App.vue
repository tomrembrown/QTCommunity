<template>
  <div>
    <qt-navbar></qt-navbar>
    <router-view></router-view>
  </div>
</template>

<script>

  import Navbar from './templates/navbar/navbar.vue';

  export default {
    components: {
      qtNavbar: Navbar
    }
  }

</script>

<style lang="scss">
</style>
