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
              <span @click="showSiteLogin">
                <router-link to="/" class="nav-link" active-class="active" exact>Home</router-link>
              </span>
            </li>
            <li class="nav-item px-2">
              <span @click="showSiteLogin">
                <router-link to="/events" class="nav-link" active-class="active">Events</router-link>
              </span>
            </li>
            <li class="nav-item px-2">
              <span @click="showSiteLogin">
                <router-link
                  to="/organizations"
                  class="nav-link"
                  active-class="active"
                >Organizations</router-link>
              </span>
            </li>
            <li class="nav-item px-2">
              <span @click="showSiteLogin">
                <router-link to="/aboutUs" class="nav-link" active-class="active">About Us</router-link>
              </span>
            </li>
            <li class="nav-item px-2">
              <span @click="showSiteLogin">
                <router-link to="/contactUs" class="nav-link" active-class="active">Contact Us</router-link>
              </span>
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

    <nav
      class="navbar navbar-expand-lg navbar-dark bg-primary p-0"
      role="navigation"
      id="submenu"
      v-if="showAdminBar"
    >
      <div class="container">
        <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapseSub">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarCollapseSub">
          <ul class="navbar-nav">
            <!-- Display when not logged in -->
            <li class="nav-item px-2" v-if="!isLoggedIn">
              <router-link to="/registerOrganization" class="nav-link" active-class="active">
                <i class="fas fa-user"></i>
                Register Organization
              </router-link>
            </li>
            <li class="nav-item px-2" v-if="!isLoggedIn">
              <span @click="showLogin">
                <router-link to="/organizationLogin" class="nav-link" active-class="active">
                  <i class="fas fa-user"></i>
                  Organization Login
                </router-link>
              </span>
            </li>

            <!-- Display only when logged in -->
            <li class="nav-item px-2" v-if="isLoggedIn">
              <router-link
                to="/editOrganization"
                class="nav-link"
                active-class="active"
              >Edit Organization</router-link>
            </li>

            <li class="nav-item px-2" v-if="isLoggedIn">
              <router-link to="/managePlaces" class="nav-link" active-class="active">Manage Places</router-link>
            </li>

            <li class="nav-item px-2" v-if="isLoggedIn">
              <router-link to="/manageEvents" class="nav-link" active-class="active">Manage Events</router-link>
            </li>
          </ul>

          <!-- Logout button at right - only display when logged in -->
          <ul class="navbar-nav ml-auto" v-if="isLoggedIn">
            <li class="nav-item px-2">
              <router-link to="/" class="nav-link" active-class="active" exact>
                <span @click="logout">
                  <i class="fas fa-user"></i>
                  Logout
                </span>
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
      if (!this.$store.getters.hasAgreedToTerms) {
        this.showSiteLogin() 
      } else {
        this.showAdminBar = !this.showAdminBar
      }
    },
    showLogin() {
      const params = {
        componentName: 'login-modal',
        title: 'Organization Login'
      }
      this.$modal.show(params)
    },
    showSiteLogin() {
      if (!this.$store.getters.hasAgreedToTerms) {
        const params = {
          componentName: 'site-modal',
          title: 'Site Login'
        }
        this.$modal.show(params)
      }
    },
    logout() {
      this.showAdminBar = false
      this.$store.dispatch('logoutOrganization')
    }
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn
    }
  }
}
</script>

<style lang="scss">
@import '/node_modules/@fortawesome/fontawesome-free/css/all.min.css';
@import '../../scss/general/navbar.scss';
</style>
