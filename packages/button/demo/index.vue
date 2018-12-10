<template>
  <div class="demo-button g-pt20">
    <!-- 不同size -->
    <h2 class="g-tac g-fs16 g-mb10">不同size</h2>
    <kn-button @click="clickMe1" :size="'small'" class="g-md20">small-button</kn-button>
    <kn-button @click="clickMe2" :size="'middle'" class="g-mt20">middle-size-button</kn-button>
    <kn-button @click="clickMe" class="g-mt20">large-primary-button</kn-button>
    <!-- 不同状态 -->
    <h2 class="g-tac g-fs16 g-mt10">不同状态</h2>
    <kn-button @click="clickMe3" :plain="true" class="g-mt10">plain-button</kn-button>
    <kn-button @click="clickMe4" :disabled="true" class="g-mt20">disabled-button</kn-button>
    <!-- 不同类型 -->
    <h2 class="g-tac g-fs16 g-mt10">不同类型</h2>
    <kn-button @click="clickMe" :type="'success'" class="g-mt20">success-button</kn-button>
    <kn-button @click="clickMe" :type="'warning'" class="g-mt20">warning-button</kn-button>
    <kn-button @click="clickMe" :type="'danger'" class="g-mt20">danger-button</kn-button>
    <kn-button @click="clickMe" :type="'danger'" :size="'middle'" :disabled="true" class="g-mt20 g-mb20">mix-props-button</kn-button>
  </div>
</template>
<script>
import knButton from '../index'
export default {
  name: 'app',
  components: {
    // eslint-disable-next-line
    knButton
  },
  data () {
    return {
      msg: 'button!'
    }
  },
  methods: {
    clickMe() {
      window.alert('You clicked default-means-bigbutton now!')
    },
    clickMe1() {
      window.alert('You clicked mini-button now!')
    },
    clickMe2() {
      window.alert('You clicked middle-size-button now!')
    },
    clickMe3() {
      window.alert('You clicked plain-button now!')
    },
    clickMe4() {
      window.alert('This is disabled button!If you see this popup, there is something wrong with code..')
    }
  }
}
</script>
<style lang="scss">
.demo-button {
  height: 100%;
  background: #fff;

}
</style>
