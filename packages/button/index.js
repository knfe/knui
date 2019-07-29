import KnButton from './src/main.vue'

KnButton.install = function(Vue) {
  Vue.component(KnButton.name, KnButton)
}

export default KnButton
