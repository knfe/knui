<template>
  <div class="kn-progress-demo">
    <h2 class="tip">一般镂空圆（无背景图标的,可自己更换颜色）</h2>
    <kn-progress :step="0" :accelerate="false" :progressBtnText="this.progressBtnTextc1"></kn-progress>
    <kn-progress :step="1" :accelerate="false" :progressBtnText="this.progressBtnTextc2"></kn-progress>
    <kn-progress :step="2" :accelerate="false" :progressBtnText="this.progressBtnTextc3"></kn-progress>
    <kn-progress :step="3" :accelerate="false" :progressBtnText="this.progressBtnTextc4"></kn-progress>
    <!-- useStepIcon默认为false -->
    <h2 class="tip">一般镂空圆（无背景图标，默认颜色）</h2>
    <kn-progress :step="0" :accelerate="false" :progressBtnText="this.progressBtnText"></kn-progress>
    <kn-progress :step="1" :accelerate="false" :progressBtnText="this.progressBtnText"></kn-progress>
    <kn-progress :step="2" :accelerate="false" :progressBtnText="this.progressBtnText"></kn-progress>
    <kn-progress :step="3" :accelerate="false" :progressBtnText="this.progressBtnText"></kn-progress>
    <!-- 状态为步骤1，并且属于有加速图标背景 -->
    <!-- <h2 class="tip">当前步骤有背景图标（如加速图标，可配置）</h2>
    <kn-progress :step="1" :accelerate="true" :progressBtnText="this.progressBtnText"></kn-progress> -->
    <h2 class="tip">当前步骤有背景图标（图标可配置）</h2>
    <kn-progress :step="0" :accelerate="true" :progressBtnText="this.progressBtnTextAccelerate1"></kn-progress>
    <kn-progress :step="1" :accelerate="true" :progressBtnText="this.progressBtnTextAccelerate2"></kn-progress>
    <kn-progress :step="2" :accelerate="true" :progressBtnText="this.progressBtnTextAccelerate3"></kn-progress>
    <kn-progress :step="3" :accelerate="true" :progressBtnText="this.progressBtnTextAccelerate4"></kn-progress>
    <!-- 适配三个步骤的进度条，有多少个步骤数组里面就传多少个，只需修改progressBtnText数组长度 -->
    <h2 class="tip">三个步骤进度条（只需修改传参数组长度）</h2>
    <kn-progress :step="0" :accelerate="false" :progressBtnText="this.progressBtnText10"></kn-progress>
    <kn-progress :step="1" :accelerate="false" :progressBtnText="this.progressBtnText10"></kn-progress>
    <kn-progress :step="2" :accelerate="false" :progressBtnText="this.progressBtnText10"></kn-progress>
    <!-- accelerate 表示当前步骤是否有背景图标，默认为false -->
    <!-- useStepIcon 表示每个步骤都有背景图标，可配置，默认为false -->
    <h2 class="tip">每个步骤都有背景图标（图标颜色可配置）</h2>
    <kn-progress :step="0" :useStepIcon="true" :progressBtnText="this.progressBtnText1"></kn-progress>
    <kn-progress :step="1" :useStepIcon="true" :progressBtnText="this.progressBtnText1"></kn-progress>
    <kn-progress :step="2" :useStepIcon="true" :progressBtnText="this.progressBtnText1"></kn-progress>

    <kn-progress :step="0" :useStepIcon="true" :progressBtnText="this.progressBtnTextc5"></kn-progress>
    <kn-progress :step="1" :useStepIcon="true" :progressBtnText="this.progressBtnTextc6"></kn-progress>
  </div>
</template>
<script>
import KnProgress from '../index'
export default {
  name: 'kn-progress-demo',
  data() {
    return {
      msg: 'kn-progress-demo',
      progressBtnTextc1: [
        { text: '步骤1', textColor: '#f9c', bgColor: '#f9c' },
        { text: '步骤2', img: require('../images/current-icon.png') },
        { text: '步骤3' },
        { text: '步骤4' }
      ],
      progressBtnTextc2: [
        { text: '步骤1', bgColor: '#6fc93e' },
        { text: '步骤2', bgColor: '#6fc93e' },
        { text: '步骤3' },
        { text: '步骤4' }
      ],
      progressBtnTextc3: [
        { text: '步骤1', bgColor: 'yellow' },
        { text: '步骤2', img: require('../images/current-icon.png'), bgColor: 'yellow' },
        { text: '步骤3', bgColor: 'yellow' },
        { text: '步骤4' }
      ],
      progressBtnTextc4: [
        { text: '步骤1' },
        { text: '步骤2', img: require('../images/current-icon.png') },
        { text: '步骤3' },
        { text: '步骤4' }
      ],
      progressBtnText: [
        { text: '步骤1' },
        { text: '步骤2', img: require('../images/current-icon.png') },
        { text: '步骤3' },
        { text: '步骤4' }
      ],
      // 进度条只有三个步骤的情况，数组就传长度3
      progressBtnText10: [
        { text: '步骤1' },
        { text: '步骤2' },
        { text: '步骤3' }
      ],
      // 注意：这个是数据结构示范，背景图标只限于当前这个步骤，配置的位置要注意，需要哪个配哪个，不需要的不做配置
      // 可以自己换需要的背景图标，每一种当前步骤状态都可以用特定的背景图标，以下分别是每个步骤的
      progressBtnTextAccelerate1: [
        { text: '步骤1', img: require('../images/current-icon.png') },
        { text: '步骤2' },
        { text: '步骤3' },
        { text: '步骤4' }
      ],
      progressBtnTextAccelerate2: [
        { text: '步骤1' },
        { text: '步骤2', img: require('../images/current-icon.png') },
        { text: '步骤3' },
        { text: '步骤4' }
      ],
      progressBtnTextAccelerate3: [
        { text: '步骤1' },
        { text: '步骤2' },
        { text: '步骤3', img: require('../images/current-icon.png') },
        { text: '步骤4' }
      ],
      progressBtnTextAccelerate4: [
        { text: '步骤1' },
        { text: '步骤2' },
        { text: '步骤3' },
        { text: '步骤4', img: require('../images/current-icon.png') }
      ],
      // 注意：若每个步骤都有背景图标，则里面传字段不能少，具体需求里面可以按自己需求改图标
      progressBtnText1: [
        { text: '步骤1', img: require('../images/step-info-1.png') },
        { text: '步骤2', img: require('../images/step-info-2.png') },
        { text: '步骤3', img: require('../images/step-info-3.png') }
      ],
      progressBtnTextc5: [
        { text: '步骤1', img: require('../images/step-info-1.png'), bgColor: '#f9c', textColor: '#f9c' },
        { text: '步骤2', img: require('../images/step-info-2.png') },
        { text: '步骤3', img: require('../images/step-info-3.png') }
      ],
      progressBtnTextc6: [
        { text: '步骤1', img: require('../images/step-info-1.png'), bgColor: '#6fc93e', textColor: '#6fc93e' },
        { text: '步骤2', img: require('../images/step-info-2.png'), bgColor: '#6fc93e', textColor: '#6fc93e' },
        { text: '步骤3', img: require('../images/step-info-3.png') }
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
