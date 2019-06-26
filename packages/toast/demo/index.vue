<template>
  <div class="kn-toast-demo">
    页面内容
    <br>
    <div @click="t1">短文字</div>
    <br>页面内容
    <br>页面内容
    <div @click="t2">长文字</div>
    <br>页面内容
    <br>页面内容
    <div @click="t3">成功</div>
    <br>页面内容
    <br>页面内容
    <div @click="t4">失败</div>
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
export default {
  name: 'kn-toast-demo',
  data() {
    return {
      msg: 'kn-toast-demo'
    }
  },
  created() {},
  mounted() {},
  methods: {
    t1() {
      KnToast.open({
        hint: '操作成功'
      })
    },
    t2() {
      KnToast.open({
        hint: '引入组件后，会自动在Vue的, 引入'
      })
    },
    t3() {
      KnToast.open({
        type: 'success',
        hint: '操作成功',
        time: 1000
        // icon: 'https://img.yzcdn.cn/vant/logo.png'
      })
    },
    t4() {
      KnToast.open({
        type: 'fail',
        hint: '操作失败'
        // icon: 'https://img.yzcdn.cn/vant/logo.png'
      })
    }
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
