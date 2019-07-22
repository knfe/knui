<template>
  <div class="kn-icon-demo">
    <div>44 * 44 图标</div>
    <div class="box">
      <app :name="'select'" class="svg"></app>
    </div>
  </div>
</template>
<script>
import app from '../index.vue'
export default {
  name: 'kn-icon-demo',
  data() {
    return {
      msg: 'kn-icon-demo'
    }
  },
  mounted() {
    document.body.classList.add('theme-2')
  },
  components: {
    app
  }
}
</script>
<style lang="scss">
// @import '../../style/index.scss';
@import '../../style/__normalize.scss';

.kn-icon-demo {
  background-color: #f8f8f8;

  .box {
    width: 0.12rem;
    height: 0.12rem;
    background-color: cyan;
    line-height: 1;
  }

  .svg {
    width: 0.12rem;
    height: 0.12rem;
  }
}
</style>
