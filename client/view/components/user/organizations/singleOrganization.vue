<template>
  <fieldset>
    <div class="row">
      <div class="col-md-3">
        <img :src="organization.image_link" :alt="organization.name" width="90%">
      </div>
      <div class="col-md-9">
        <h2>{{ organization.name }}</h2>
        <p class="card-text">{{ organization.description_english }}</p>
      </div>
    </div>
  </fieldset>
</template>
 
<script>
export default {
  props: {
    organization: {
      type: Object,
      required: true
    }
  }
}
</script>
 
<style lang="scss" scoped>
@import '../../../scss/forms/fieldset';
@import '../../../scss/forms/h2';
</style>