// 布局缩放基数
const baseRate = 50
// 设计图宽度
const designWidth = 750

/**
 * 根元素 html font-size 设置方法
 * @param {Number} baseWidth 设计值
 * @param {Number} rate 布局缩放基数
 */
export default function (baseWidth = designWidth, rate = baseRate) {
  function setHtmlFontSize () {
    let screenWidth = window.innerWidth
    let fontSize = screenWidth / baseWidth * rate
    document.documentElement.style.fontSize = fontSize + 'px'
  }
  setHtmlFontSize()
  window.onload = setHtmlFontSize
  window.onresize = setHtmlFontSize
}
