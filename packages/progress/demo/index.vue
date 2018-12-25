<template>
  <div class="kn-progress-demo">
    <!-- 普通订单进程的步骤 无加速的 -->
    <!-- useStepIcon默认为false，所以订单进程/审核结果进度部分可不传 -->
    <h2 class="tip">订单进程/审核结果进度（无加速的）</h2>
    <kn-progress :step="0" :accelerate="false" :progressBtnText="this.progressBtnText"></kn-progress>
    <kn-progress :step="1" :accelerate="false" :progressBtnText="this.progressBtnText"></kn-progress>
    <kn-progress :step="2" :accelerate="false" :progressBtnText="this.progressBtnText"></kn-progress>
    <kn-progress :step="3" :accelerate="false" :progressBtnText="this.progressBtnText"></kn-progress>
    <!-- 状态为排队中，并且属于加速处理的订单（需求里面加速资格的是出钱买的） -->
    <h2 class="tip">排队中（已加速）</h2>
    <kn-progress :step="1" :accelerate="true" :progressBtnText="this.progressBtnText"></kn-progress>
    <!-- 普通订单进程的步骤 有加速的 -->
    <h2 class="tip">订单进程/审核结果进度（有加速背景的）</h2>
    <kn-progress :step="0" :accelerate="true" :progressBtnText="this.progressBtnTextAccelerate1"></kn-progress>
    <kn-progress :step="1" :accelerate="true" :progressBtnText="this.progressBtnTextAccelerate2"></kn-progress>
    <kn-progress :step="2" :accelerate="true" :progressBtnText="this.progressBtnTextAccelerate3"></kn-progress>
    <kn-progress :step="3" :accelerate="true" :progressBtnText="this.progressBtnTextAccelerate4"></kn-progress>
    <!-- 适配三个步骤的进度条，有多少个步骤数组里面就传多少个，只需修改progressBtnText数组长度 -->
    <h2 class="tip">三个步骤进度条（只需修改传参数组长度）</h2>
    <kn-progress :step="0" :accelerate="false" :progressBtnText="this.progressBtnText10"></kn-progress>
    <kn-progress :step="1" :accelerate="false" :progressBtnText="this.progressBtnText10"></kn-progress>
    <kn-progress :step="2" :accelerate="false" :progressBtnText="this.progressBtnText10"></kn-progress>
    <!-- 基本信息填写的步骤 -->
    <!-- 注意，基本信息填写部分都是有背景的小图标，所以useStepIcon为true，但是此场景没有加速资格，所以accelerate为false -->
    <!-- accelerate默认为false，所以基本信息填写部分可不传 -->
    <h2 class="tip">基本信息填写</h2>
    <kn-progress :step="0" :useStepIcon="true" :progressBtnText="this.progressBtnText1"></kn-progress>
    <kn-progress :step="1" :useStepIcon="true" :progressBtnText="this.progressBtnText1"></kn-progress>
    <kn-progress :step="2" :useStepIcon="true" :progressBtnText="this.progressBtnText1"></kn-progress>
  </div>
</template>
<script>
import KnProgress from '../index'
export default {
  name: 'kn-progress-demo',
  data() {
    return {
      msg: 'kn-progress-demo',
      // 注意：这个是订单进程里面数据结构示范
      progressBtnText: [
        { text: '审核通过' },
        { text: '排队中', img: require('../images/current-icon.png') },
        { text: '放款中' },
        { text: '银行到账' }
      ],
      // 进度条只有三个步骤的情况，数组就传长度3
      progressBtnText10: [
        { text: '审核通过' },
        { text: '放款中' },
        { text: '银行到账' }
      ],
      // 注意：这个是订单进程里面有加速背景的数据结构示范，由于加速背景只限于当前这个步骤，所以配置的位置要注意，需要哪个配哪个，不需要的不做配置
      // 可以自己换需要的背景图标，每一种当前步骤状态都可以用特定的背景图标，以下分别是每个步骤的
      progressBtnTextAccelerate1: [
        { text: '审核通过', img: require('../images/current-icon.png') },
        { text: '排队中' },
        { text: '放款中' },
        { text: '银行到账' }
      ],
      progressBtnTextAccelerate2: [
        { text: '审核通过' },
        { text: '排队中', img: require('../images/current-icon.png') },
        { text: '放款中' },
        { text: '银行到账' }
      ],
      progressBtnTextAccelerate3: [
        { text: '审核通过' },
        { text: '排队中' },
        { text: '放款中', img: require('../images/current-icon.png') },
        { text: '银行到账' }
      ],
      progressBtnTextAccelerate4: [
        { text: '审核通过' },
        { text: '排队中' },
        { text: '放款中' },
        { text: '银行到账', img: require('../images/current-icon.png') }
      ],
      // 注意：这个是基本信息，里面传字段不能少，此处传的是设计稿默认的，具体需求里面可以按自己需求改图标
      progressBtnText1: [
        { text: '基本信息', img: require('../images/step-info-1.png') },
        { text: '联系人', img: require('../images/step-info-2.png') },
        { text: '运营商认证', img: require('../images/step-info-3.png') }
      ]
    }
  },
  components: {
    KnProgress
  }
}
</script>
<style lang="scss">
.kn-progress-demo {
  padding-top: 15px;
  .tip {
    text-align: center;
    margin: 10px 0;
  }
}
</style>
