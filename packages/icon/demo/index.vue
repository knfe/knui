<template>
  <div class="kn-icon-demo">
    <div>44 * 44 图标</div>
    <app :icon="'city'"></app>
    <span>city</span>
    <br>
    <app :icon="'face'"></app>
    <span>face</span>
    <br>
    <app :icon="'location'"></app>
    <span>location</span>
    <br>
    <app :icon="'info'"></app>
    <span>info</span>
    <br>
    <app :icon="'phone'"></app>
    <span>phone</span>
    <br>
    <app :icon="'user'"></app>
    <span>user</span>
    <br>
    <app :icon="'chsi'"></app>
    <span>chsi</span>
    <br>
    <app :icon="'lock-on'"></app>
    <span>lock-on</span>
    <br>
    <app :icon="'contact'"></app>
    <span>contact</span>
    <br>
    <app :icon="'relation'"></app>
    <span>relation</span>
    <div>26 * 26 图标</div>
    <app :icon="'arrow-right'" :iconSize="'small'"></app>
    <span>arrow-right</span>
    <br>
    <app :icon="'arrow-down'" :iconSize="'small'"></app>
    <span>arrow-down</span>
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
@import '../../style/index.scss';
.kn-icon-demo {
  padding-top: 20px;
  width: 100%;
  // height: 44px;
  line-height: 44px;
  text-align: center;
  background-color: cyan;
}
</style>
