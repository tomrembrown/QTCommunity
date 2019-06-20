<template>
  <div class="container">
    <h2>List of Organizations</h2>
    <single-organization v-for="organization in organizations" :organization="organization" :key="organization.name"></single-organization>
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
        console.log(response)
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
 
<style lang="scss" scoped></style>
