/**
 * @function 兼容性处理函数
 * @author KeNo
 */

/**
 * 得到鼠标位置的方法
 * @param event 事件的名称
 * @returns {x: 距离左边的距离, y: 距离上方的距离}
 */
export function getPage(event) {
  var pageX = event.pageX || getScroll().left + event.clientX
  var pageY = event.pageY || getScroll().top + event.clientY
  return { x: pageX, y: pageY }
}

/**
 * 得到卷曲部位大小的方法
 * @returns {top: 上方卷曲的距离, left: 左方卷曲的距离}
 */
export function getScroll() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
  var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft
  return { top: scrollTop, left: scrollLeft }
}

/**
 * 添加事件的方法
 * @param ele 事件源
 * @param type  事件名称 "需要引号"
 * @param fn  事件发生函数
 */
export function myAddEvent(ele, type, fn) {
  if (ele.addEventListener) {
    ele.addEventListener(type, fn)
  } else if (ele.attachEvent) {
    ele.attachEvent('on' + type, fn)
  } else {
    ele['on' + type] = fn
  }
}

/**
 * 删除事件的方法
 * @param ele 事件源
 * @param type  事件名称 "需要引号"
 * @param fn  事件发生函数
 */
export function myRemoveEvent(ele, type, fn) {
  if (ele.removeEventListener) {
    ele.removeEventListener(type, fn)
  } else if (ele.detachEvent) {
    ele.detachEvent('on' + type, fn)
  } else {
    ele['on' + type] = null
  }
}

/**
 * 获取非行内样式
 * @param ele   被获取的元素
 * @param attrName  需要获取的属性名
 * @returns     返回该属性的样式
 */
export function getStyle(ele, attrName) {
  if (window.getComputedStyle) {
    // 如果使用getComputedStyle能够拿到样式
    return window.getComputedStyle(ele, null)[attrName]
  }
  return ele.currentStyle[attrName]
}

/**
 * 获取可视区域的宽和高
 * @returns width和height
 */
export function getClient() {
  var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0
  var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0

  return { clientWidth: width, clientHeight: height }
}

export default {
  getPage,
  getScroll,
  myAddEvent,
  myRemoveEvent,
  getStyle,
  getClient
}
