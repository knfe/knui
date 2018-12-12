<template>
  <transition name="kn-layer-bounce">
    <div class="kn-layer" v-show="isShow">
      <div class="kn-layer--mask"></div>
      <div class="kn-layer--box g-tac" :class="[`kn-layer--${type}`]">
        <div class="kn-layer--title" v-if="title" v-text="title"></div>
        <div class="kn-layer--content g-tal" v-if="content">
          <slot>
            <div v-if="content" v-html="content" :class="[title ? 'has-title' : '']"></div>
          </slot>
        </div>
        <div class="kn-layer--footer g-hairline--top">
          <kn-button :plain="true" :size="'small'" :round="false" @click="close">cancel</kn-button>
          <kn-button :size="'small'" :round="false" @click="comfirm">confirm</kn-button>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import KnButton from '../button/index.vue'
export default {
  name: 'kn-layer',
  components: {
    KnButton
  },
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
    },
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    }
  },
  methods: {
    comfirm(evt) {
      this.$emit('comfirm', evt)
    },
    close(evt) {
      this.$emit('close', evt)
    }
  }
}
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>
