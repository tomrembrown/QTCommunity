<template>
  <section>
    <label class="label" :for="idName">{{ heading }}</label>
    <label class="input">
      <input 
        style="display: none" 
        type="file" 
        ref="fileInput"
        @change="onFileChange($event.target.name, $event.target.files)">
      <input
        type="text"
        :id="idName"
        :name="idName"
        :aria-describedby="idHelp"
        :placeholder="placeholder"
        v-model.lazy="value"
        @click="openFileInput()"
        @input="$emit('input', $event.target.value)"
      />      
    </label>
    <div v-if="isError" class="note error">
      {{ errorMessage }}
    </div>
    <div v-else-if="helpText.length > 0" class="note" :id="idHelp">
      {{ helpText }}
    </div>
  </section>
</template>

<script>
import { convertHeadingToName } from '../../../utils/convertHeadingToName'
import constants from '../../../../joint/constants'

export default {
  data() {
    return {
      value: ''
    }
  },
  props: {
    heading: {
      type: String,
      required: true
    },
    idName: {
      type: String,
      default: function() {
        return convertHeadingToName(this.heading)
      }
    },
    placeholder: {
      type: String,
      default: ''
    },
    helpText: {
      type: String,
      default: ''
    }
  },
  methods: {
    openFileInput() {
      this.$refs.fileInput.value = null
      this.$refs.fileInput.click()
    },
    onFileChange(fieldName, file) {
      if (file.length > 0) {
        let imageFile = file[0]
        
        // First check if any errors with this file
        this.$store.commit('removeError', this.idName)
        if (!imageFile.type.match('image.*')) {
          const thisError = {
            element: this.idName,
            message: 'Please choose an image file'
          }
          this.$store.commit('addError', thisError)
        } else if (imageFile.size > constants.maxSizeNumber) {
          const thisError = {
            element: this.idName,
            message: 'Please select an image under ' + constants.maxSizeText
          }
          this.$store.commit('addError', thisError)
        } else {

          // No errors with the file, now open the image modal
          // to crop and preview the image
          this.$store.commit('setImageFile', imageFile)
          this.$store.commit('setImageFormIDName', this.idName)
          const params = {
            componentName: 'image-modal',
            title: 'Crop Image'
          }
          this.$modal.show(params)

          // In the image modal there are two buttons, a discard
          // and a save image
          // If save image is clicked, then the value here is updated
          // with the imagefile name, and the store is updated and the
          // file data set

        }
      }
    }
  },
  computed: {
    idHelp() {
      return this.idName + 'Help'
    },
    isError() {
      let thisError =
        this.$store.getters.getError(this.idName).length === 0 ? false : true
      return thisError
    },
    errorMessage() {
      let errorObject = this.$store.getters.getError(this.idName)
      return errorObject[0].message
    }
  },
  mounted() {
    // Check in store if this had something set in server
    const valueFromStore = this.$store.getters.getValueForElement(this.idName)
    if (valueFromStore) this.value = valueFromStore

    // Watch for when it changes - special for images since brings up a modal window
    this.$store.watch(
      (state, getters) => getters.getImageFileName,
      (newValue, oldValue) => {
        if (newValue !== '') {
          this.value = newValue
        }
      }
    )
  }
}
</script>

<style lang="scss">
@import '../../scss/forms/label';
@import '../../scss/forms/input';
@import '../../scss/forms/note';
@import '../../scss/forms/section';
@import '../../scss/forms/buttons';
</style>