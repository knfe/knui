import knButton from './button'

const components = [
  knButton
]

const install = function (Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  install,
  knButton
}

export default {
  install,
  knButton
}
