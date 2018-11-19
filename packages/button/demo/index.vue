<template>
  <div>
    <kn-button>默认button</kn-button>
  </div>
</template>
<script>
import knButton from '../index'
export default {
  name: 'app',
  components: {
    // eslint-disable-next-line
    knButton
  },
  data () {
    return {
      msg: 'button!'
    }
  }
}
</script>
<style lang="scss">
</style>
