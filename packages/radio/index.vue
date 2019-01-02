<template>
  <div class="kn-radio">
    <div @click="Switch()" class="radio-circle" :class="[checked ? 'checked' : 'unchecked', nocheck ? 'no-check' : '']" :style="{'background-color': bgColor}">
    </div>
  </div>
</template>
<script>
export default {
  name: 'kn-radio',
  data() {
    return {

    }
  },
  props: {
    // 表示是否有勾，默认为有勾
    nocheck: {
      default: false
    },
    checked: {
      default: true
    },
    bgColor: {
      type: String
    }
  },
  methods: {
    Switch() {
      this.$emit('switch', 'switch radio')
    }
  }
}
</script>
<style lang="scss">
@import "./index.scss";
</style>
