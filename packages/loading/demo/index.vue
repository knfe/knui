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
import knLoading from '../index.js'

export default {
  name: 'kn-loading-demo',
  data() {
    return {
      msg: 'kn-loading-demo'
    }
  },
  created() {
    // Loading({
    //   type: 'spinner',
    //   shadow: 'rgba(0, 0, 0, .3)',
    //   content: '',
    //   hint: '请求中...'
    // }) // 调用
    let index = knLoading.open({ type: 'circular', shadowClose: true })
    console.log(index)
    setTimeout(() => {
      knLoading.close(index)
    }, 2000)
    // knLoading.open({ type: 'circular' })
    knLoading.open({ type: 'spinner' })
  },
  components: {
    // app
  }
}
</script>
