<template>
  <div class="kn-button-demo">
    <h1>button demo</h1>
    <button>button1</button>
    <button>button2</button>
    <button>button3</button>
  </div>
</template>
<script>
export default {
  name: 'kn-button-demo',
  data () {
    return {
      msg: 'button!'
    }
  }
}
</script>
<style lang="scss">
@import '../../utils/rem/sass.scss';
button {
  display: block;
  width: px2rem(50);
  height: px2rem(40);
}
</style>
