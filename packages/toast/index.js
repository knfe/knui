import Vue from 'vue'
import toastVue from './index.vue'

const ToastConstructor = Vue.extend(toastVue)
let instanceArray = [] // 实例列表
const animateTime = 500 // 动画时间/单位ms

const KnToast = {
  /**
   * 打开新的toast
   * @param {Object} [config]loading配置信息
   *
   * @param {String} [type = 'tip']toast类型，可选值为tip，success，fail
   * @param {String} [hint = '']文字提示
   * @param {String} [className='']自定义类名
   * @param {Boolean} [time = 2]默认显示时间
   */
  open: config => {
    let defaults = {
      visible: false, // toast是否可见(用于过渡)
      type: 'tip', // 类型
      hint: '轻提示',
      className: '', // 自定义类名
      icon: '',
      time: 2, // 默认2s
      index: 'index' + new Date().getTime() // 编号
    }

    // 如果存在一个Toast，先清除上一个
    let lastToast = document.querySelector(`#kn-toast`)
    if (lastToast) document.body.removeChild(lastToast)

    let data = Object.assign(defaults, config)

    let instance = new ToastConstructor({
      el: document.createElement('div'),
      data: data
    })

    Vue.nextTick(() => {
      instance.visible = true
    })

    // 设置定时器，多少S后关闭
    setTimeout(() => {
      KnToast.close(data.index)
    }, data.time * 1000)

    // 将编号对应的示例对象，保存在数组中
    let domObj = {}
    domObj[data.index] = instance
    instanceArray.push(domObj)
    console.log(instanceArray)

    document.body.appendChild(instance.$el)
    return data.index
  },
  /**
   * 关闭指定的toast
   * @param {String} [index]loading编号
   */
  close: index => {
    let toastDom = document.querySelector(`#kn-toast.${index}`)
    let sourceInstance // 目标值
    let sourceInstanceIndex // 目标索引
    for (let i = 0; i < instanceArray.length; i++) {
      if (instanceArray[i][index]) {
        sourceInstance = instanceArray[i]
        sourceInstanceIndex = i
      }
    }
    sourceInstance[index].visible = false

    setTimeout(() => {
      document.body.removeChild(toastDom)
      instanceArray.splice(sourceInstanceIndex, 1)
      if (instanceArray.length < 1) {
        document.body.classList.remove('kn-body-hidden-hidden')
      }
    }, animateTime)
  },
  /**
   * 关闭所有的toast
   */
  closeAll: () => {
    let toastDoms = document.querySelectorAll(`#kn-toast`)
    instanceArray.forEach(v => {
      for (var k in v) {
        v[k].visible = false
      }
    })
    setTimeout(() => {
      toastDoms.forEach(v => {
        document.body.removeChild(v)
      })
      document.body.classList.remove('kn-body-hidden-hidden')
    }, animateTime)
  }
}
export default KnToast
