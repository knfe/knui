<template>
  <div class="kn-layer-demo g-pt100">
    <kn-button class="g-mb40 g-mt40" :size="'small'" @click="tip">消息提示</kn-button>
    <kn-button class="g-mb40" :size="'small'" @click="comfirm">消息确认</kn-button>
    <kn-button class="g-mb40" :size="'small'" @click="prompt">对话框</kn-button>
    <d-dialog :isShow="showTip" :title="'title'" :content="'content'" @close="closeTip" @comfirm="comfirmTip"></d-dialog>
    <d-dialog :isShow="showComfirm" :type="'comfirm'"></d-dialog>
    <d-dialog :isShow="showPrompt" :type="'prompt'"></d-dialog>
  </div>
</template>
<script>
import DDialog from '../index.vue'
import KnButton from '../../button/index'
export default {
  name: 'kn-layer-demo',
  data() {
    return {
      showTip: false,
      showComfirm: false,
      showPrompt: false
    }
  },
  components: {
    DDialog,
    KnButton
  },
  methods: {
    tip() {
      this.showTip = true
    },
    comfirm() {
      this.showComfirm = true
    },
    prompt() {
      this.showPrompt = true
    },
    closeTip(evt) {
      this.showTip = false
    },
    comfirmTip(evt) {
      this.showTip = false
    }
  }
}
</script>
<style lang="scss">
</style>
