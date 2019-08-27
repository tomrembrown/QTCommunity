<template>
  <div class="container">
    <div class="sky-form" v-if="loading">
      <header>Loading ...</header>
    </div>
    <div class="sky-form" v-else-if="displayedOrganizations.length > 0">
      <header>List of Organizations</header>
      <single-organization
        v-for="organization in displayedOrganizations"
        :organization="organization"
        :key="organization.id"
      ></single-organization>
      <div id="organization-list-bottom"></div>
    </div>
    <div class="sky-form" v-else>
      <header>No Organizations Found Matching Criteria</header>
    </div>
  </div>
</template>
 
<script>
import axios from 'axios'
import SingleOrganization from './singleOrganization.vue'
import scrollMonitor from 'scrollmonitor'
import constants from '../../../../../joint/constants'

let watcher

export default {
  data() {
    return {
      allOrganizations: [],
      displayedOrganizations: [],
      loading: false
    }
  },
  methods: {
    readOrganizations() {
      let $this = this
      $this.loading = true
      axios.get('readRoutesServer/readOrganizations').then(response => {
        // Load all organizations to allOrganizations - but don't display yet
        $this.allOrganizations = response.data
        $this.loading = false
        $this.appendResults()
      })
    },
    appendResults() {
      // This displays a chunk of the organizations - either on loading, or
      // when user scrolls down to bottom of page
      if (this.displayedOrganizations.length < this.allOrganizations.length) {
        const toAppend = this.allOrganizations.slice(
          this.displayedOrganizations.length,
          constants.numberOrgsToLoad + this.displayedOrganizations.length
        )
        this.displayedOrganizations = this.displayedOrganizations.concat(
          toAppend
        )
      }
    }
  },
  components: {
    'single-organization': SingleOrganization
  },
  created() {
    this.readOrganizations()
  },
  updated() {
    // When page updated - i.e. when get new results - then set a watcher
    // such that this.appeendResults method is called when user scrolls to bottom
    const elementToWatch = document.getElementById('organization-list-bottom')
    watcher = scrollMonitor.create(elementToWatch)
    watcher.enterViewport(this.appendResults)
  },
  beforeUpdate() {
    // Delete watcher before each update since Vue's DOM rendering may cause issues
    if (watcher) {
      watcher.destroy()
      watcher = null
    }
  }
}
</script>
 
<style lang="scss" scoped>
@import '../../../scss/forms/form';
@import '../../../scss/forms/header';
</style>
