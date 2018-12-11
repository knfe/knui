/**
 * this files is gererated by scripts/create/index.js
 */

// import packages
import KnButton from './button/index.vue'
import KnLayer from './layer/index.vue'

// package version
const version = '0.4.0'

// init components
const components = [KnButton, KnLayer]
const install = function (Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

// export components
export { KnButton, KnLayer }

// export default
export default {
  version,
  install
}
