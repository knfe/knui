<template>
  <div class="kn-layer-demo g-pt100">
    <kn-button class="g-mb40 g-mt40" :size="'small'" @click="tip">消息提示</kn-button>
    <kn-button class="g-mb40" :size="'small'" @click="comfirm">消息确认</kn-button>
    <kn-button class="g-mb40" :size="'small'" @click="prompt">对话框</kn-button>
    <d-dialog :isShow="showTip" :title="'title-tip'" :content="'content-tip'" @close="closeTip" @comfirm="comfirmTip"></d-dialog>
    <d-dialog :isShow="showComfirm" :type="'comfirm'" :title="'title-comfirm'" :content="'content-comfirm'" @close="closeComfirm" @comfirm="comfirmComfirm"></d-dialog>
    <d-dialog v-show="show1" :isShow="showPrompt" :type="'prompt'" :title="'title-prompt'" :content="'content-prompt'" @close="closePrompt" @comfirm="comfirmPrompt"></d-dialog>
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
      showPrompt: false,
      show1: 0
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
    },
    closeComfirm() {
      this.showComfirm = false
    },
    comfirmComfirm() {
      this.showComfirm = false
    },
    closePrompt() {
      this.showPrompt = false
    },
    comfirmPrompt() {
      this.showPrompt = false
    }
  }
}
</script>
<style lang="scss">
</style>
