<template>
  <div class="kn-message-demo">
    <br>页面内容
    <br>页面内容
    <br>页面内容
    <br>页面内容
    <br>页面内容
    <br>页面内容
    <br>页面内容
    <br>页面内容
    <br>页面内容
    <br>页面内容
    <br>页面内容
    <br>页面内容
    <br>页面内容
    <br>页面内容
    <br>页面内容
    <br>页面内容
    <br>页面内容
    <br>页面内容
    <br>页面内容
    <br>页面内容
    <br>页面内容
    <br>页面内容
    <br>页面内容
    <br>页面内容
    <br>页面内容
    <br>页面内容
    <br>页面内容
    <br>页面内容
    <br>页面内容
    <br>页面内容
    <br>页面内容
    <br>页面内容
    <br>页面内容
    <br>页面内容
    <br>页面内容
    <br>页面内容
    <br>页面内容
    <br>页面内容
    <br>页面内容
    <br>页面内容
    <br>页面内容
    <br>页面内容
    <br>页面内容
    <br>页面内容
    <br>页面内容
    <br>页面内容
    <br>页面内容
    <br>
  </div>
</template>
<script>
import KnMessage from '../index.js'
export default {
  name: 'kn-message-demo',
  data() {
    return {
      msg: 'kn-message-demo'
    }
  },
  created() {},
  mounted() {
    let index = KnMessage.open({
      title: '提示',
      message: '贾君鹏，你妈妈喊你回家吃饭',
      btn: ['不好', '好的'],
      rightBtnCloseLoading: true,
      leftBtnClick: () => {
        // console.log('不好')
        KnMessage.close(index)
      },
      rightBtnClick: () => {
        // console.log('好的')
      }
    })
    // let index1 = KnMessage.open({
    //   title: 'xx',
    //   message: 'yyyyyy',
    //   btn: ['不好'],
    //   shadowClose: true,
    //   leftBtnCloseLoading: true,
    //   leftBtnClick: () => {
    //     console.log('不好')
    //     setTimeout(() => {
    //       KnMessage.close(index1)
    //     }, 5000)
    //   }
    // })
    // setTimeout(() => {
    //   KnMessage.closeAll()
    // }, 10000)
  }
}
</script>
<style lang="scss">
.zidingyi {
  .content-btn-left {
    background-color: red;
    color: #000;
  }
}
</style>
