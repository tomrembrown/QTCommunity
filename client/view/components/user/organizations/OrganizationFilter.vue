<template>
  <fieldset>
    <form action>
      <div class="row">
        <div class="col-md-12">
          <h2>Filter</h2>
        </div>
      </div>
      <div class="row align-items-center">
        <div class="col-md-6">
          <section>
            <label class="label" for="organization-type-chosen">Organization Type</label>
            <label class="select">
              <select
                id="organization-type-chosen"
                name="organization-type-chosen"
                @change="changeFilter"
              >
                <option value="all" key="all" selected>All Organizations</option>
                <option
                  v-for="thisType in organizationTypes"
                  :value="thisType.id"
                  :key="thisType.id"
                >{{ thisType.text }}</option>
              </select>
              <i></i>
            </label>
          </section>
        </div>
        <div class="col-md-6">
          <section>
            <label class="label" for="is-wheelchair-accessible">Is Wheelchair Accessibility Required?</label>
            <label class="select">
              <select
                id="is-wheelchair-accessible"
                name="is-wheelchair-accessible"
                @change="changeFilter"
              >
                <option value="not" selected>Not Required</option>
                <option value="some">At Least Some Wheelchair Accessibility Required</option>
                <option value="full">Full Wheelchair Accessibility Required</option>
              </select>
              <i></i>
            </label>
          </section>
        </div>
      </div>
    </form>
  </fieldset>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      organizationTypes: [],
      wheelchairAccessible: false
    }
  },
  methods: {
    switchWheelchair() {
      this.wheelchairAccessible = !this.wheelchairAccessible
      this.$emit('changeFilter', {
        element: 'wheelchairAccessible',
        value: this.wheelchairAccessible
      })
    },
    changeFilter($event) {
      let element = $event.target.id
      element = element.replace(/([-_][a-z])/g, group =>
        group
          .toUpperCase()
          .replace('-', '')
          .replace('_', '')
      )
      const value = $event.target.value
      this.$emit('changeFilter', {
        element,
        value
      })
    },
    getOrganizationTypes() {
      let $this = this
      axios
        .get('readRoutesServer/getValuesList/organization_types')
        .then(response => {
          $this.organizationTypes = response.data
        })
    }
  },
  mounted() {
    // Get values from server for the organizations dropdown
    this.getOrganizationTypes()
  }
}
</script>

<style lang="scss" scoped>
@import '../../../scss/forms/label';
@import '../../../scss/forms/select';
@import '../../../scss/forms/section';
@import '../../../scss/forms/checkbox';
</style>