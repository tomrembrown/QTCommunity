<template>
  <div>
    <div class="modal-body">
      <cropper 
        classname="cropper"
        :src="imageUrl"
        @change="change"
      ></cropper>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="cancel">Cancel</button>
      <button type="button" class="btn btn-primary" @click="save">Use Cropped Image</button>
    </div>
  </div>
</template>

<script>
import { Cropper } from 'vue-advanced-cropper'

export default {
  data() {
    return {
      imageUrl: '',
      savedImageBase64String: ''
    }
  },
  methods: {
    save() {
      // Keeping this image - first save the base64 string to the form data
      const payload = {
        element: this.$store.getters.getImageFormIDName,
        value: this.savedImageBase64String
      }
      this.$store.commit('setElement', payload)
      
      // Update image file name - a watch placed on this in form
      // So updates there when this is done
      this.$store.commit('setImageFileName')

      // Finally hide modal window
      this.$modal.hide()
    },
    cancel() {
      this.$modal.hide()
    },
    change({canvas}) {
      this.savedImageBase64String = canvas.toDataURL(this.$store.getters.getImageFileType)
    }
  },
  components: {
    Cropper
  },
  mounted() {
    this.imageUrl = this.$store.getters.getImageUrl
  }
}
</script>

<style lang="scss" scoped>
</style>