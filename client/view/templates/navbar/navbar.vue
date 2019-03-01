<template>
  <nav class="navbar navbar-expand-xl navbar-dark bg-dark p-0">
    <div class="container">
      <span class="navbar-brand">Queer Toronto</span>
      <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarCollapse">
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
            <router-link to="/createEvent" class="nav-link" active-class="active">Create New Event</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
</script>

<style lang="scss">
</style>
