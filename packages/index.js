/**
 * this files is gererated by scripts/create/index.js
 */

// import packages
import KnButton from './button/index.vue'
import KnCell from './cell/index.vue'
import KnIcon from './icon/index.vue'
import KnPullRefresh from './pullRefresh/index.vue'
import KnProgress from './progress/index.vue'

// package version
const version = '0.4.0'

// init components
const components = [KnButton, KnCell, KnIcon, KnPullRefresh, KnProgress]
const install = function (Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

// export components
export { KnButton, KnCell, KnIcon, KnPullRefresh, KnProgress }

// export default
export default {
  version,
  install
}
