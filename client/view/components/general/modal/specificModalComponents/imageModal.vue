<template>
  <div>
    <div class="modal-body">
      <div class="preview-crop">
        <img :src="imageUrl" />
      </div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="discard">Discard Image</button>
      <button type="button" class="btn btn-primary" @click="keep">Keep Image</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: ''
    }
  },
  methods: {
    keep() {
      // Keeping this image - so update the image name in the form, update the
      // form elements in store with path to file, and save file data
      // the store commit function does this all for us
      this.$store.dispatch('saveImageFile')

      // Finally hide modal window
      this.$modal.hide()
    },
    discard() {
      this.$modal.hide()
    }
  },
  mounted() {
    this.imageUrl = this.$store.getters.getImageUrl
  }
}
</script>

<style lang="scss" scoped>
  .preview-crop {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .preview-crop img {
    max-width: 100%;
    max-height: 500px;
  }
</style>