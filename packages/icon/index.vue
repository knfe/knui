<template>
  <span class="kn-icon" :class="[`icon-${icon}`, iconSize]" @click="clickIcon"></span>
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
      type: String
    },
    iconSize: {
      type: String,
      default: 'normal'
    }
  },
  methods: {
    clickIcon() {
      this.$emit('click')
    }
  }
}
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>
