<template>
  <span class="kn-icon" :class="[`icon-${icon}`, iconSize]" :style="style"></span>
</template>
<script>
export default {
  name: 'kn-icon',
  data() {
    return {
      msg: 'hello kn-icon'
    }
  },
  props: {
    icon: {
      type: String,
      default: 'face'
    },
    iconSize: {
      type: String,
      default: 'normal'
    }
  },
  computed: {
    style() {
      return {}
    }
  }
}
</script>
<style lang="scss" scoped>
@import './index.scss'
</style>
