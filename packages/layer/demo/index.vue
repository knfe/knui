<template>
  <div class="kn-layer-demo">
    <app></app>
  </div>
</template>
<script>
import app from '../index.vue'
export default {
  name: 'kn-layer-demo',
  data() {
    return {
      msg: 'kn-layer-demo'
    }
  },
  components: {
    app
  }
}
</script>
<style lang="scss">
.kn-layer-demo {
}
</style>
