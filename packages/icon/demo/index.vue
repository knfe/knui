<template>
  <div class="kn-icon-demo">
    <app></app>
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
  components: {
    app
  }
}
</script>
<style lang="scss">
.kn-icon-demo {
}
</style>
