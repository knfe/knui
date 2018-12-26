<template>
  <div class="kn-progress">
    <!-- 兼容订单进程的步骤 和普通进件基本信息  -->
    <div class="progress-div" :class="{'info-step-div': useStepIcon}">
      <div v-for="(item, index) in progressBtnText" :key="index" class="step" :class="{'active': index < step, 'current': index === step && !accelerate}">
        <p class="circle" :class="{'acceleratecircle': accelerate && index === step}">
          <img v-if="accelerate || useStepIcon" :src="item.img" class="circle-img" alt="">
        </p>
        <p class="text" :class="{'accelerateCurrentText': accelerate && index === step}">{{item.text}}</p>
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
      // 是否都用图标表示（进件基本信息都是用图标表示）0-普通订单结果进程 1-进件基本信息进程
      default: false
    },
    accelerate: {
      // 表示是否加速（目前主要用于普通订单进程结果排队中的状态, 并且useStepIcon === 1时这个值一定为0,因为进件基本信息进程里面没有加速的概念）
      default: false
    },
    // 订单进程步骤
    progressBtnText: {
      type: Array
    }
  }
}
</script>
<style lang="scss">
@import "./index.scss";
</style>
