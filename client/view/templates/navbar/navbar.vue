<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark p-0" role="navigation" id="topmenu">
      <div class="container">
        <span class="navbar-brand">Queer Toronto</span>
        <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapseTop">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarCollapseTop">
          <ul class="navbar-nav">
            <li class="nav-item px-2">
              <router-link to="/" class="nav-link" active-class="active" exact>Home</router-link>
            </li>
            <li class="nav-item px-2">
              <router-link to="/events" class="nav-link" active-class="active">Events</router-link>
            </li>
            <li class="nav-item px-2">
              <router-link to="/organizations" class="nav-link" active-class="active">Organizations</router-link>
            </li>
            <li class="nav-item px-2">
              <router-link to="/aboutUs" class="nav-link" active-class="active">About Us</router-link>
            </li>
            <li class="nav-item px-2">
              <router-link to="/contactUs" class="nav-link" active-class="active">Contact Us</router-link>
            </li>
          </ul>

          <ul class="navbar-nav ml-auto"> 
            <li class="nav-item px-2">
              <a class="nav-link" active-class="active" href="#" @click="clickAdmin">Admin</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <nav  class="navbar navbar-expand-lg navbar-dark bg-primary p-0" 
          role="navigation" 
          id="submenu"
          v-if="showAdminBar">
      <div class="container" >
        <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapseSub">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarCollapseSub">
          <ul class="navbar-nav">
            <li class="nav-item px-2">
              <router-link to="/registerOrganization" class="nav-link" active-class="active">
                <i class="fas fa-user"></i> 
                Register Organization
              </router-link>
            </li>
            <li class="nav-item px-2">
              <router-link to="/organizationLogin" class="nav-link" active-class="active">
                <i class="fas fa-user"></i> 
                Organization Login
              </router-link>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  
  </div>
</template>

<script>
export default {
  data() {
    return {
      showAdminBar: false
    }
  },
  methods: {
    clickAdmin() {
      this.showAdminBar = !this.showAdminBar
    }
  }
}
</script>

<style lang="scss">
</style>
