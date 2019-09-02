<template>
  <div class="container">
    <div class="sky-form">
      <header>
        <div class="row">
          <div class="col-md-6">List of Organizations</div>
          <div class="col-md-6">
            <form action>
              <ash-select
                heading="Filter by Organization Type"
                idName="organization_type_chosen"
                table="organization_types"
                :isForFilter="true"
                @change="changeFilter($event)"
              ></ash-select>
            </form>
          </div>
        </div>
      </header>
      <div v-if="loading">
        <fieldset>
          <h2>Loading ...</h2>
        </fieldset>
      </div>
      <div v-else-if="filteredOrganizations.length > 0">
        <single-organization
          v-for="organization in displayedOrganizations"
          :organization="organization"
          :key="organization.id"
        ></single-organization>
      </div>
      <div v-else>
        <fieldset>
          <h2>No Organizations Found Matching Criteria</h2>
        </fieldset>
      </div>
      <div id="organization-list-bottom"></div>
    </div>
  </div>
</template>
 
<script>
import { forms } from '../../../../../joint/dataValidation/general/formsAndTable'
import axios from 'axios'
import SingleOrganization from './singleOrganization.vue'
import Select from '../../formElements/select.vue'
import scrollMonitor from 'scrollmonitor'
import constants from '../../../../../joint/constants'

let watcher

export default {
  data() {
    return {
      allOrganizations: [],
      filteredOrganizations: [],
      displayedOrganizations: [],
      loading: false,
      organizationTypeChosen: 'all'
    }
  },
  methods: {
    readOrganizations() {
      let $this = this
      $this.loading = true
      axios.get('readRoutesServer/readOrganizations').then(response => {
        // Load all organizations to allOrganizations - but don't display yet
        // Initially no filter applied - so also load all to filtered orgs
        $this.allOrganizations = response.data
        $this.filteredOrganizations = $this.allOrganizations
        $this.loading = false
        $this.appendResults()
      })
    },
    appendResults() {
      // This displays a chunk of the organizations - either on loading, or
      // when user scrolls down to bottom of page
      if (
        this.displayedOrganizations.length < this.filteredOrganizations.length
      ) {
        const toAppend = this.filteredOrganizations.slice(
          this.displayedOrganizations.length,
          constants.numberOrgsToLoad + this.displayedOrganizations.length
        )
        this.displayedOrganizations = this.displayedOrganizations.concat(
          toAppend
        )
      }
    },
    changeFilter(event) {
      this[event.element] = event.value
      this.filteredOrganizations = this.allOrganizations.filter(
        organization => {
          if (this.organizationTypeChosen === 'all') return true
          else
            return (
              organization.organization_type_id == this.organizationTypeChosen
            )
        }
      )
      this.displayedOrganizations = []
      this.appendResults()
    }
  },
  components: {
    'single-organization': SingleOrganization,
    'ash-select': Select
  },
  computed: {
    formName() {
      return forms.ORGANIZATION_FILTER
    }
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
@import '../../../scss/lists/organizationList';
@import '../../../scss/forms/fieldset';
</style>
