<template>
  <div id="background">
    <qt-navbar></qt-navbar>
    <router-view></router-view>
    <app-modal/>
    <qt-footer></qt-footer>
  </div>
</template>

<script>
import Navbar from './components/navigation/navbar.vue'
import Footer from './components/general/footer.vue'

export default {
  components: {
    qtNavbar: Navbar,
    qtFooter: Footer
  }
}
</script>

<style lang="scss">
@import 'node_modules/bootstrap/scss/bootstrap.scss';
@import 'node_modules/bootstrap-vue/src/index.scss';
@import './scss/main';
</style>