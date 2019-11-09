<template>
  <form action>
    <fieldset>
      <div class="row">
        <div class="col-md-12">

            <label class="input form-group has-search">
              <span class="fa fa-search form-control-feedback"></span>
              <input
                class="form-control"
                placeholder="Search"
                type="text"
                id="search-term"
                name="search-term"
                aria-describedby="search-term-help"
                @keyup="changeSearch($event)"
              />
              <div
                class="note"
                id="search-term-help"
              >Search for a term in {{ thisPage }} name and description</div>
            </label>
        </div>
      </div>
    </fieldset>
    <fieldset>
      <div class="row align-items-center">
        <div class="col-md-12">
          <h2 @click="showFilter=!showFilter" class="clickable">
            <i v-if="!showFilter" class="fas fas-clickable fa-caret-right"></i>
            <i v-else class="fas fas-clickable fa-caret-down"></i>
            <span class="h2-clickable">Filter</span>
          </h2>
        </div>
      </div>
      <div v-if="showFilter">
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
              <label
                class="label"
                for="is-wheelchair-accessible"
              >Is Wheelchair Accessibility Required?</label>
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
        <div class="row align-items-center">
          <div class="col-md-6">
            <section>
              <label
                class="label"
                for="gender-identity-chosen"
              >{{pageCapitalized}}s Welcoming this Gender Identity</label>
              <label class="select">
                <select
                  id="gender-identity-chosen"
                  name="gender-identity-chosen"
                  @change="changeFilter"
                >
                  <option value="any" key="any" selected>Any Gender Identity</option>
                  <option
                    v-for="thisGenderIdentity in genderIdentities"
                    :value="thisGenderIdentity.id"
                    :key="thisGenderIdentity.id"
                  >{{ thisGenderIdentity.heading }}</option>
                </select>
                <i></i>
              </label>
            </section>
          </div>
          <div class="col-md-6">
            <section>
              <label
                class="label"
                for="sexual-orientation-chosen"
              >{{pageCapitalized}}s Welcoming this Sexual Orientation</label>
              <label class="select">
                <select
                  id="sexual-orientation-chosen"
                  name="sexual-orientation-chosen"
                  @change="changeFilter"
                >
                  <option value="any" key="any" selected>Any Sexual Orientation</option>
                  <option
                    v-for="thisSexualOrientation in sexualOrientations"
                    :value="thisSexualOrientation.id"
                    :key="thisSexualOrientation.id"
                  >{{ thisSexualOrientation.heading }}</option>
                </select>
                <i></i>
              </label>
            </section>
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col-md-4">
            <section>
              <label class="label" for="age-allowed">{{pageCapitalized}} Accepts this Age</label>
              <label class="input">
                <input
                  type="text"
                  id="age-allowed"
                  name="age-allowed"
                  aria-describedby="age-allowed-help"
                  @blur="changeFilter"
                />
                <div
                  class="note"
                  id="age-allowed-help"
                >Only show {{thisPage}}s which accept this age</div>
              </label>
            </section>
          </div>
          <div class="col-md-4">
            <section>
              <label class="label" for="race-religion-targetted">Targetted at this Race or Religion</label>
              <label class="input">
                <input
                  type="text"
                  id="race-religion-targetted"
                  name="race-religion-targetted"
                  aria-describedby="race-religion-targetted-help"
                  @blur="changeFilter"
                />
                <div
                  class="note"
                  id="race-religion-targetted-help"
                >Only show {{thisPage}}s targetted at this race or religion</div>
              </label>
            </section>
          </div>
          <div class="col-md-4">
            <section>
              <label for="is-family-friendly" class="checkbox">
                <input
                  type="checkbox"
                  name="is-family-friendly"
                  id="is-family-friendly"
                  @click="switchFamilyFriendly()"
                />
                <i></i>
                Family Friendly Only
              </label>
            </section>
          </div>
        </div>
      </div>
    </fieldset>
  </form>
</template>

<script>
import axios from 'axios'
import constants from '../../../../../joint/constants'

export default {
  data() {
    return {
      organizationTypes: [],
      isFamilyFriendly: false,
      sexualOrientations: constants.sexualOrientations,
      genderIdentities: constants.genderIdentities,
      showFilter: false
    }
  },
  methods: {
    switchFamilyFriendly() {
      this.isFamilyFriendly = !this.isFamilyFriendly
      this.$emit('changeFilter', {
        element: 'isFamilyFriendly',
        value: this.isFamilyFriendly
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
    changeSearch($event) {
      let element = $event.target.id
      element = element.replace(/([-_][a-z])/g, group =>
        group
          .toUpperCase()
          .replace('-', '')
          .replace('_', '')
      )
      let value = $event.target.value
      if (value == null)
        this.$emit('changeFilter', {
          element,
          value: ''
        })
      else {
        value = value.trim().toLowerCase()
        if (value.length >= 3)
          this.$emit('changeFilter', {
            element,
            value
          })
        else
          this.$emit('changeFilter', {
            element,
            value: ''
          })
      }
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
  props: {
    thisPage: { 
      type: String,
      required: true
    }
  },
  computed: {
    pageCapitalized() {
      return this.thisPage.charAt(0).toUpperCase() + this.thisPage.slice(1)
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
@import '../../../scss/forms/input';
@import '../../../scss/forms/note';
@import '../../../scss/lists/organizationList';
</style>