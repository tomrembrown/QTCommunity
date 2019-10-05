<template>
  <div id="background">
    <qt-navbar />
    <router-view />
    <app-modal />
    <qt-footer />
  </div>
</template>

<script>
import Navbar from './components/navigation/navbar.vue'
import Footer from './components/general/footer.vue'

export default {
  components: {
    qtNavbar: Navbar,
    qtFooter: Footer
  },
  mounted() {
    // if (!$cookies.get('isLoaded')) {
    const params = {
      componentName: 'site-modal',
      title: 'Site Login'
    }
    this.$modal.show(params)
    // $cookies.set('isLoaded', true)
    // }
  }
}
</script>

<style lang="scss">
@import 'node_modules/bootstrap/scss/bootstrap.scss';
@import 'node_modules/bootstrap-vue/src/index.scss';
@import './scss/main';
</style>