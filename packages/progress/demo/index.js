/**
 * kn-progress-demo component demo entry
 */

import Vue from 'vue'
import app from './index.vue'
import px2rem from '../../utils/rem/index'
px2rem()

new Vue({
  render: h => h(app)
}).$mount('#app')
