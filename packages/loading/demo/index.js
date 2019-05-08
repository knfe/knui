/**
 * kn-loading-demo component demo entry
 */

import Vue from 'vue'
import app from './index.vue'
import knUi from '../../index'

Vue.use(knUi)

new Vue({
  render: h => h(app)
}).$mount('#app')
