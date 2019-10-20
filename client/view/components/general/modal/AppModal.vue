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
    <div class="modal-background" @click="hide"></div>
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalLabel">{{ title }}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="hide">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <!-- The modal body and modal footer are set in one of the specific modals
        inside of the specificModals folder-->
        <component ref="modal" :is="componentName" />
      </div>
    </div>
  </div>
</template>

<script>
import Modal from './modalPlugin.js'
import LoginModal from './specificModalComponents/LoginModal.vue'
import ImageModal from './specificModalComponents/ImageModal.vue'
import SiteModal from './specificModalComponents/SiteModal.vue'

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
      if (this.componentName === 'login-modal') this.$store.commit('resetAllForms')
    },
    show(params) {
      if (params.componentName === 'login-modal' && this.$refs.modal && this.$refs.modal.$refs.form) {
        this.$refs.modal.$refs.form.reset()
      }

      this.visible = true
      this.title = params.title
      this.componentName = params.componentName
    }
  },
  components: {
    LoginModal,
    ImageModal,
    SiteModal
  },
  beforeMount() {
    // Listen for events emitted outside
    Modal.EventBus.$on('show', params => {
      this.show(params)
    })
    Modal.EventBus.$on('hide', () => {
      this.hide()
    })
  },
  mounted() {
    var $modal = this
    document.addEventListener('keydown', event => {
      if ($modal.visible && event.keyCode == 27) {
        $modal.hide()
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.modal-background {
  position: absolute;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.75);
}
</style>