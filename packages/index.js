/**
 * this files is gererated by scripts/create/index.js
 */

// import packages
import KnButton from './button/src'
import KnCell from './cell/src'
import KnIcon from './icon/src'
import KnProgress from './progress/src'
import KnPullRefresh from './pullRefresh/src'
import KnRadio from './radio/src'
import KnLoading from './loading/src/main.js/src'
import KnMessage from './message/src/main.js/src'
import KnToast from './toast/src/main.js/src'

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
