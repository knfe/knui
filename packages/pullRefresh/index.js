import KnPullRefresh from './src/main.vue'

KnPullRefresh.install = function(Vue) {
  Vue.component(KnPullRefresh.name, KnPullRefresh)
}

export default KnPullRefresh
