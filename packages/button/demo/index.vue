<template>
  <div class="demo-button g-pt20">
    <kn-button @click="clickMe" class="g-md20">default-means-big-button</kn-button>
    <kn-button @click="clickMe1" class="g-mt20">mini-button</kn-button>
    <kn-button @click="clickMe2" class="g-mt20">middle-size-button</kn-button>
    <kn-button @click="clickMe3" class="g-mt20">plain-button</kn-button>
    <kn-button @click="clickMe4" class="g-mt20">disabled-button</kn-button>
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
      window.alert('This is disabled button!')
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
