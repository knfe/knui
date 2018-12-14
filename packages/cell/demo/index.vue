<template>
  <div class="kn-cell-demo">
    <app></app>
  </div>
</template>
<script>
import app from '../index.vue'
export default {
  name: 'kn-cell-demo',
  data() {
    return {
      msg: 'kn-cell-demo'
    }
  },
  components: {
    app
  }
}
</script>
<style lang="scss">
.kn-cell-demo {
}
</style>
