<template>
  <div class="kn-pullrefresh-demo">
    <pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div class="content"></div>
    </pull-refresh>
  </div>
</template>
<script>
import PullRefresh from '../index'
import { setTimeout } from 'timers'
export default {
  name: 'kn-pullrefresP-demo',
  data() {
    return {
      isLoading: false
    }
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false
      }, 2000)
    }
  },
  components: {
    PullRefresh
  }
}
</script>
<style lang="scss">
@import '../../style/index.scss';

.kn-pullrefresh-demo {
  .content {
    width: 100%;
    height: 1000px;
    background-color: red;
  }
}
</style>
