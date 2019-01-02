<template>
  <div class="kn-layer-demo g-pt100">
    <kn-button class="g-mb40 g-mt40" :size="'small'" @click="tip">消息提示</kn-button>
    <kn-button class="g-mb40" :size="'small'" @click="comfirm">消息确认</kn-button>
    <kn-button class="g-mb40" :size="'small'" @click="prompt">对话框</kn-button>
    <d-dialog v-model="showDialog1" :title="'title-tip'" :content="'content-tip'" @close="closeTip" @comfirm="comfirmTip"></d-dialog>
    <d-dialog v-model="showDialog2" :isShow="showComfirm" :type="'comfirm'" :title="'title-comfirm'" :content="'content-comfirm'" @close="closeComfirm" @comfirm="comfirmComfirm"></d-dialog>
    <d-dialog v-model="showDialog3" :type="'prompt'" :title="'title-prompt'" :content="'content-prompt'" @close="closePrompt" @comfirm="comfirmPrompt"></d-dialog>
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
      showDialog1: false,
      showDialog2: false,
      showDialog3: false
    }
  },
  components: {
    DDialog,
    KnButton
  },
  methods: {
    tip() {
      this.showDialog1 = true
    },
    comfirm() {
      this.showDialog2 = true
    },
    prompt() {
      this.showDialog3 = true
    },
    closeTip(evt) {
      this.showDialog1 = false
    },
    comfirmTip(evt) {
      this.showDialog1 = false
    },
    closeComfirm() {
      this.showDialog2 = false
    },
    comfirmComfirm() {
      this.showDialog2 = false
    },
    closePrompt() {
      this.showDialog3 = false
    },
    comfirmPrompt() {
      this.showDialog3 = false
    }
  }
}
</script>
<style lang="scss">
</style>
