/**
 * this files is gererated by scripts/create/index.js
 */

// import packages
import KnButton from './button/index'
import KnCell from './cell/index'
import KnIcon from './icon/index'
import KnProgress from './progress/index'
import KnPullRefresh from './pullRefresh/index'
import KnRadio from './radio/index'
import KnLoading from './loading/index'
import KnMessage from './message/index'
import KnToast from './toast/index'

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
