<template>
  <div class="card flex-row flew-wrap">
    <div class="card-header border=0">
      <img :src="organization.image_link" :alt="organization.name">
    </div>
    <div class="card-block px-2">
      <h4 class="card-title">{{ organization.name }}</h4>
      <p class="card-text">{{ organization.description_english }}</p>
    </div>
  </div>
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
 
</style>