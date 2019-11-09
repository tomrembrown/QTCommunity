<template>
  <form action>
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
      <div class="note" id="search-term-help">Search for a term in event name, title, or description</div>
    </label>
  </form>
</template>

<script>
export default {
  methods: {
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
    }
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