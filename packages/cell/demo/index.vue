<template>
  <div class="kn-cell-demo">
    <app :title="'学信网认证'" :value="'已认证'"></app>
    <app :title="'学信网认证'" :value="'已认证'" is-link></app>
    <app :title="'学信网认证'" :value="'已认证'" is-select></app>
    <app :title="'学信网'" :value="'已认证'" is-select :title-label="'未认证可能导致失败'"></app>
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
