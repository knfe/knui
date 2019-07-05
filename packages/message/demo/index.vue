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
    <!-- <KnLoadingComp :message="msg" :title="msg" :btn="btn" :visible="visible" @close="close"></KnLoadingComp> -->
  </div>
</template>
<script>
// import KnMessage from '../index.js'
// import KnLoadingComp from '../index.vue'
// import KnToast from '../../toast/index'
// import KnLoading from '../../loading/index'
export default {
  name: 'kn-message-demo',
  data() {
    return {
      msg: 'kn-message-demo',
      btn: ['comfirm', 'cancel'],
      visible: true
    }
  },
  components: {
    // KnLoadingComp
  },
  methods: {
    close() {
      this.visible = false
    },
    open() {
      this.visible = true
    }
  },
  created() {
    // KnLoading.open()
  },
  mounted() {
    // let index = KnMessage.open({
    //   title: '提示',
    //   message: '贾君鹏，你妈妈喊你回家',
    //   btn: ['不好', '好的'],
    //   rightBtnCloseLoading: true,
    //   leftBtnClick: inputValue => {
    //     console.log('不好', inputValue)
    //     KnMessage.close(index)
    //   },
    //   rightBtnClick: inputValue => {
    //     console.log('好的', inputValue)
    //     // KnToast.open({
    //     //   type: 'success'
    //     // })
    //     KnLoading.open({
    //       type: 'spinner'
    //     })
    //   },
    //   hasInput: true,
    //   inputType: 'text',
    //   inputMaxlength: 6,
    //   hasCountDown: true,
    //   countDownTime: 30
    // })
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
