<template>
  <button class="kn-button" :class="[`kn-button--${type}`, `kn-button--${size}`, {
    'is-plain': plain
  }]" :disabled="disabled" @click="btnClick">
    <slot></slot>
  </button>
</template>
<script>
/**
 * kn-button
 * @module packages/button
 * @desc 按钮
 * @param {String} [type=default] 所有选项：default primary success warning danger
 * @param {String} [size=normal] 所有选项： normal small large
 * @param {Boolean} [plain=false] 所有选项：false true 背景镂空
 * @param {Boolean} [disabled=false] 所有选项：false true 是否禁用
 * @param {slot} 按钮文本
 * @example
 * <kn-button :size="'large'" :type="'primary'" :plain="true"></kn-button>
 */
export default{
  name: 'kn-button',
  data () {
    return {}
  },
  props: {
    type: {
      type: String,
      default: 'primary',
      validator(value) {
        return [
          'primary',
          'success',
          'warning',
          'danger'
        ].includes(value)
      }
    },
    size: {
      type: String,
      default: 'normal',
      validator(value) {
        return [
          'normal',
          'small',
          'large',
          'middle'
        ].includes(value)
      }
    },
    plain: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    btnClick(event) {
      this.$emit('click', event)
    }
  }
}
</script>
<style lang="scss">
  @import "./index.scss";
</style>
