<template>
  <div class="kn-toast-demo">
    页面内容
    <br>页面内容
    <br>页面内容
    <br>页面内容
    <br>页面内容
    <br>页面内容
    <br>页面内容
    <br>页面内容
    <br>页面内容
    <a href="http://www.baidu.com">百度一下</a>
    <br>页面内容
    <br>页面内容
    <br>页面内容
    <br>页面内容
    <br>页面内容
    <br>页面内容
    <a href="http://www.baidu.com">百度一下</a>
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
    <a href="http://www.baidu.com">百度一下</a>
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
import KnToast from '../index.js'
import { setTimeout } from 'timers'
export default {
  name: 'kn-toast-demo',
  data() {
    return {
      msg: 'kn-toast-demo'
    }
  },
  created() {},
  mounted() {
    setTimeout(() => {
      KnToast.open({
        type: 'success',
        hint: '操作成功了'
        // icon: 'https://img.yzcdn.cn/vant/logo.png'
      })
      // KnToast.open({
      //   hint: '引入组件后，会自动在Vue的, 引入'
      // })
    }, 2000)
    // KnToast.open()
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
