<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {}
}
</script>

<style lang="scss" scoped>
@import "../packages/style/index.scss";
#app {
  font-size: 14px;
  text-align: center;
}
</style>
