<template>
  <div
    :class="'modal fade ' + (visible ? 'show' : 'hide')"
    id="modal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="modalLabel"
    aria-hidden="true"
    :style="'display:' + (visible ? 'block' : 'none')"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalLabel">{{ title }}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="hide">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <!-- The modal body and modal footer are set in one of the specific modals
             inside of the specificModals folder -->
        <component :is="componentName" />
      </div>
    </div>
  </div>
</template>

<script>
import Modal from './modalPlugin.js'
import LoginModal from './specificModalComponents/loginModal.vue'
import ImageModal from './specificModalComponents/imageModal.vue'

export default {
  data() {
    return {
      title: '',
      visible: false,
      componentName: ''
    }
  },
  methods: {
    hide() {
      this.visible = false
    },
    show(params) {
      this.visible = true
      this.title = params.title
      this.componentName = params.componentName
    }
  },
  components: {
    'login-modal': LoginModal,
    'image-modal': ImageModal
  },
  beforeMount() {
    // Listen for events emitted outside
    Modal.EventBus.$on('show', params => {
      this.show(params)
    })
    Modal.EventBus.$on('hide', () => {
      this.hide()
    })
  }
}
</script>

<style lang="scss" scoped>

</style>