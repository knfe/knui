import Vue from 'vue'
import LoadingVue from './index.vue'

const LoadingConstructor = Vue.extend(LoadingVue)

const knLoading = {
  /**
   * 打开新的loading
   * @param {Object} [config]loading配置信息
   *
   * @param {String} [type = 'circular']类型
   * @param {String} [shadow]背景色（支持css颜色写法）
   * @param {Boolean} [shadowClose = false]背景点击是否可以关闭loading
   * @param {String} [content = 'transparent']中心内容区域颜色（支持css颜色写法）
   * @param {String} [hint = '加载中...']中心内容区域文案
   * @param {Number} [time]至少n秒后关闭
   */
  open: (config = {}) => {
    // 这里处理一些各种loading的默认样式
    let defaults = getDefaultStyle(config.type)

    // 如果存在一个loading，则清除上一个 ---- 该功能待定
    // let lastLayer = document.querySelector(`#kn-loading`)
    // if (lastLayer) document.body.removeChild(lastLayer)

    let data = Object.assign(defaults, config)

    // 如果有最小显示的时间
    if (data.time) {
      knLoading.timeOut = false
      setTimeout(() => {
        knLoading.timeOut = true
        knLoading.close(data.index)
      }, data.time * 1000)
    }

    // 使用LoadingConstructor()构造函数生成一个新的实例(虚拟dom)
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
   * @param {String} [index]loading编号
   */
  close: index => {
    if (!knLoading.timeOut) return
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
  },
  /**
   * 倒计时是否完成
   */
  timeOut: true
}
export default knLoading

/**
 * 获取 loading 的默认样式
 * @param {String} [type]loading类型
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
