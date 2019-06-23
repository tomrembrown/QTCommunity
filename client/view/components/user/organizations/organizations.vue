<template>
  <div class="container">
    <div class="sky-form" v-if="organizations.length > 0">
      <header>List of Organizations</header>
      <single-organization v-for="organization in organizations" :organization="organization" :key="organization.name"></single-organization>
    </div>
    <div class="sky-form" v-else>
      <header>No Organizations Found Matching Criteria</header>
    </div>
  </div>
</template>
 
<script>
import axios from 'axios'
import SingleOrganization from './singleOrganization.vue'
 
export default {
  data() {
    return {
      organizations: []
    }
  },
  methods: {
    readOrganizations() {
      let $this = this
      axios.get('readRoutesServer/readOrganizations').then(response => {
        $this.organizations = response.data
      })
    }
  },
  components: {
    'single-organization': SingleOrganization
  },
  beforeMount() {
    this.readOrganizations()
  }
}
</script>
 
<style lang="scss" scoped>
@import '../../../scss/forms/form';
@import '../../../scss/forms/header';
</style>
