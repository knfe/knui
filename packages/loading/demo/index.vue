<template>
  <div class="kn-loading-demo">
    <p>loading</p>
    <p>loading</p>
    <p>loading</p>
    <p>loading</p>
    <p>loading</p>
    <p>loading</p>
    <p>loading</p>
    <p>loading</p>
    <p>loading</p>
    <p>loading</p>
    <p>loading</p>
    <p>loading</p>
    <p>loading</p>
  </div>
</template>
<script>
// import app from '../index.vue'
import '../index.scss'

export default {
  name: 'kn-loading-demo',
  data() {
    return {
      msg: 'kn-loading-demo'
    }
  },
  created() {
    console.log(this.$knLoading)

    // let index = this.$knLoading.open({ type: 'circular', shadowClose: true })
    // console.log(index)
    // setTimeout(() => {
    //   this.$knLoading.close(index)
    // }, 2000)
    // // knLoading.open({ type: 'circular' })
    // this.$knLoading.open({ type: 'spinner' })
  },
  components: {
    // app
  }
}
</script>
