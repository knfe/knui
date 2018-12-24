<template>
  <span class="kn-icon" :class="[`icon-${icon}`, iconSize]"></span>
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
  }
}
</script>
<style lang="scss" scoped>
@import './index.scss'
</style>
