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
import knLoading from '../index'

export default {
  name: 'kn-loading-demo',
  data() {
    return {
      msg: 'kn-loading-demo'
    }
  },
  created() {
    knLoading.open({ type: 'circular', shadowClose: true })
    // console.log(index)
    // setTimeout(() => {
    //   this.$knLoading.close(index)
    // }, 2000)
    // // knLoading.open({ type: 'circular' })
    // let index = knLoading.open({ type: 'bubble' })
    // let index1 = knLoading.open({ type: 'spinner', className: 'loadingx' })
    // setTimeout(() => {
    //   knLoading.close(index)
    //   knLoading.close(index1)
    //   // knLoading.closeAll()
    // }, 2000)
  },
  components: {
    // app
  }
}
</script>
<style lang="scss">
.loadingx {
  .hint {
    color: red;
  }
}
</style>
