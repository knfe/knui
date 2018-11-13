<template>
<button class="kn-button" :type="type" :disabled="disabled">
  <slot></slot>
</button>
</template>
<script>
export default {
  name: 'kn-button',
  data () {
    return {}
  },
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'small'
    },
    plain: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>
