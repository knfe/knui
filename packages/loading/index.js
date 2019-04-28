import Vue from 'vue'
import LoadingVue from './index.vue'

const LoadingConstructor = Vue.extend(LoadingVue)

const knLoading = {
  /**
   * 打开新的loading
   * @params {Object} config loading配置信息
   *         type
   *         shadow
   *         shadowClose
   *         content
   *         hint
   */
  open: (config = {}) => {
    // 这里处理一些各种loading的默认样式
    let defaults = getDefaultStyle(config.type)

    // 如果存在一个loading，则清除上一个 ---- 该功能待定
    // let lastLayer = document.querySelector(`#kn-loading`)
    // if (lastLayer) document.body.removeChild(lastLayer)

    // 使用LoadingConstructor()构造函数生成一个新的实例(虚拟dom)
    let data = Object.assign(defaults, config)
    let instance = new LoadingConstructor({
      el: document.createElement('div'),
      data: data,
      methods: {
        closeShadow() {
          if (!data.shadowClose) return
          knLoading.close(data.index)
        }
      }
    })

    document.body.appendChild(instance.$el)
    return data.index
  },
  /**
   * 关闭指定的loading
   */
  close: index => {
    let loadingDom = document.querySelector(`#kn-loading.${index}`)
    document.body.removeChild(loadingDom)
  },
  /**
   * 关闭所有的loading
   */
  closeAll: () => {
    let loadingDoms = document.querySelectorAll('#kn-loading')
    for (var i = 0; i < loadingDoms.length; i++) {
      document.body.removeChild(loadingDoms[i])
    }
  }
}
export default knLoading

/**
 * 获取 loading 的默认样式
 * @param {String} type loading类型
 * @return {Object} 样式的默认对象
 */
function getDefaultStyle(type = 'circular') {
  switch (type) {
    case 'circular':
      return {
        type: 'circular', // loading类型
        shadow: '#fff', // 背景区域颜色
        shadowClose: false,
        content: 'transparent', // 中心内容区域颜色
        hint: '加载中...', // 提示文案
        index: 'index' + new Date().getTime() // 编号
      }
    case 'bubble':
      return {
        type: 'bubble', // loading类型
        shadow: '', // 背景区域颜色
        shadowClose: false,
        content: 'transparent', // 中心内容区域颜色
        hint: '加载中...', // 提示文案
        index: 'index' + new Date().getTime() // 编号
      }
    case 'spinner':
      return {
        type: 'spinner', // loading类型
        shadow: 'transparent', // 背景区域颜色
        shadowClose: false,
        content: 'rgba(0, 0, 0, .5)', // 中心内容区域颜色
        hint: '加载中...', // 提示文案
        index: 'index' + new Date().getTime() // 编号
      }
    default:
      return {}
  }
}
