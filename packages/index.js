/**
 * this files is gererated by scripts/create/index.js
 */

// import packages
import KnButton from './button/index.vue'
import KnCell from './cell/index.vue'
import KnIcon from './icon/index.vue'
import KnProgress from './progress/index.vue'
import KnPullRefresh from './pullRefresh/index.vue'
import KnRadio from './radio/index.vue'
import KnLoading from './loading/index.js'
import KnMessage from './message/index.js'
import KnToast from './toast/index.js'

// package version
const version = '0.5.2'

// init components
const components = [KnButton, KnCell, KnIcon, KnProgress, KnPullRefresh, KnRadio]
const install = function(Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
  Vue.prototype.$knLoading = KnLoading
  Vue.prototype.$knMessage = KnMessage
  Vue.prototype.$knToast = KnToast
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

// export components
export { KnButton, KnCell, KnIcon, KnProgress, KnPullRefresh, KnRadio, KnLoading, KnMessage, KnToast }

// export default
export default {
  version,
  install
}
