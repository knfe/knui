<template>
  <div class="kn-progress">
    <!-- 兼容每个步骤都有背景图标的（图标可以自己配置），当前步骤有背景图标的，每个步骤都是镂空圆的情况  -->
    <div class="progress-div" :class="{'info-step-div': useStepIcon}">
      <div v-for="(item, index) in progressBtnText" :key="index" class="step" :class="{'active': index < step, 'current': index === step && !accelerate}">
        <p class="circle" :class="{'acceleratecircle': accelerate && index === step}" :style="{'background-color': index === step && !useStepIcon ? '' : item.bgColor, 'borderColor': item.bgColor}">
          <img v-if="accelerate || useStepIcon" :src="item.img" class="circle-img" alt="">
        </p>
        <p class="text" :class="{'accelerateCurrentText': accelerate && index === step}" :style="{'color': item.textColor}">{{item.text}}</p>
        <span class="line" :style="{'background-color': index < step ? item.bgColor : ''}"></span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'kn-progress',
  props: {
    step: {
      // 用step来标记目前到了哪一步,从0开始
      default: 0
    },
    useStepIcon: {
      // 是否都用图标背景表示
      default: false
    },
    accelerate: {
      // 表示当前步骤是否要加速图标（也可以是其他图标，可自己配置图标）
      default: false
    },
    // 请注意，这个数组里面可配置背景图标，每一步骤文案颜色，每一步骤背景颜色，若不配置则为默认的橙色
    progressBtnText: {
      type: Array
    }
  }
}
</script>
<style lang="scss">
@import "./index.scss";
</style>
