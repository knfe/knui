<template>
  <div class="kn-radio">
    <div
      @click="Switch()"
      class="radio-circle"
      :class="[checked ? 'checked' : 'unchecked', nocheck ? 'no-check' : '']"
      :style="{'background-color': bgColor}"
    ></div>
  </div>
</template>
<script>
export default {
  name: 'kn-radio',
  data() {
    return {}
  },
  props: {
    // 表示是否有勾，默认为有勾（没有勾的是空心圆，仅样式有区别）
    nocheck: {
      default: false
    },
    // 表示是否为选中状态（选中为有颜色的背景，没选中为灰色背景）
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
@import './main.scss';
</style>
