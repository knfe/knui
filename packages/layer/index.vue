<template>
  <transition name="kn-layer-bounce">
    <div class="kn-layer" v-if="value">
      <div class="kn-layer--mask"></div>
      <div class="kn-layer--box g-tac" :class="[`kn-layer--${type}`]">
        <div class="kn-layer--title" v-if="title" v-text="title"></div>
        <div class="kn-layer--content g-tal" v-show="content">
          <slot>
            <div
              v-show="content && type !== 'prompt'"
              v-html="content"
              :class="[title ? 'has-title' : '']"
            ></div>
            <div v-show="content && type === 'prompt'" :class="[title ? 'has-title' : '']">
              <input ref="input" type="text" class="kn-layer--input" :placeholder="placeholderText">
            </div>
          </slot>
        </div>
        <div class="kn-layer--footer g-hairline--top">
          <kn-button
            :plain="true"
            :size="'small'"
            :round="false"
            @click="handle('cancel')"
            v-if="type !== 'tip'"
          >{{cancelText}}</kn-button>
          <kn-button :size="'small'" :round="false" @click="handle('comfirm')">{{comfirmText}}</kn-button>
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
    value: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'tip',
      validator(value) {
        return ['tip', 'comfirm', 'prompt'].includes(value)
      }
    },
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    placeholderText: {
      type: String,
      default: ''
    },
    cancelText: {
      type: String,
      default: 'cancel'
    },
    comfirmText: {
      type: String,
      default: 'confirm'
    }
  },
  methods: {
    // 事件处理
    handle(evt, action) {
      if (action === 'comfirm') {
        this.$emit('comfirm', evt)
      } else {
        this.$emit('input', false)
      }
    }
  },
  mounted() {},
  watch: {
    value(nv) {
      if (nv) {
        this.$nextTick(() => {
          // 自动聚焦
          this.$refs.input.focus()
        })
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>
