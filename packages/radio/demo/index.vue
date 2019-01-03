<template>
  <div class="kn-radio-demo">
    <h3>默认样式（选中和未选中）</h3>
    <kn-radio :checked="true"></kn-radio>
    <kn-radio :checked="false"></kn-radio>
    <h3>可以配置颜色（不配置则为默认颜色）</h3>
    <kn-radio :checked="true" :bgColor="'#4a90e2'"></kn-radio>
    <kn-radio :checked="true" :bgColor="'#ffb500'"></kn-radio>
    <kn-radio :checked="true" :bgColor="'#69c959'"></kn-radio>
    <kn-radio :checked="true" :bgColor="'#f9c'"></kn-radio>
    <kn-radio :checked="true" :bgColor="'#f00'"></kn-radio>
    <h3>可以点击（切换选）</h3>
    <h3>(只需要加上响应点击事件@switch)</h3>
    <kn-radio :checked="checked1" @switch="onSwitch1"></kn-radio>
    <kn-radio :checked="checked2" @switch="onSwitch2"></kn-radio>
    <h3>没有勾选UI（直接展示空心圆圈,可切换）</h3>
    <kn-radio :checked="checked3" :nocheck="nocheck1" @switch="onSwitch3" ></kn-radio>
    <kn-radio :checked="checked4" :nocheck="nocheck2" :bgColor="'#69c959'" @switch="onSwitch4" ></kn-radio>
  </div>
</template>
<script>
import knRadio from '../index.vue'
export default {
  name: 'kn-radio-demo',
  data() {
    return {
      checked1: false,
      checked2: false,
      checked3: false,
      checked4: false,
      // 是否有勾的标记
      nocheck1: true,
      nocheck2: true
    }
  },
  methods: {
    onSwitch1(msg) {
      this.checked1 = !this.checked1
    },
    onSwitch2() {
      this.checked2 = !this.checked2
    },
    onSwitch3() {
      this.checked3 = !this.checked3
      this.nocheck1 = !this.nocheck1
    },
    onSwitch4() {
      this.checked4 = !this.checked4
      this.nocheck2 = !this.nocheck2
    }
  },
  components: {
    knRadio
  }
}
</script>
<style lang="scss">
.kn-radio-demo {
}
</style>
