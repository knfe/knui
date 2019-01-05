import Vue from 'vue'
import App from './App.vue'
// 路由组件
import router from './router'
import px2rem from '../packages/utils/rem/index'
// import { knButton } from '../packages/index'
px2rem()
Vue.config.productionTip = false
// Vue.component('kn-button', knButton)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
