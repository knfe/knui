import KnProgress from './src/main.vue'

KnProgress.install = function(Vue) {
  Vue.component(KnProgress.name, KnProgress)
}

export default KnProgress
