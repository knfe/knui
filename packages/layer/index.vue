<template>
  <transition name="kn-layer-bounce">
    <div class="kn-layer" v-show="isShow">
      <div class="kn-layer--mask"></div>
      <div class="kn-layer--tip">
        <div class="kn-layer--title">title</div>
        <div class="kn-layer--content">title</div>
        <div class="kn-layer--button">
          <button>cancel</button>
          <button>confirm</button>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'kn-layer',
  data() {
    return {}
  },
  props: {
    isShow: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'tip',
      validator(value) {
        return [
          'tip',
          'comfirm',
          'prompt'
        ].includes(value)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>
