export default function(baseWidth, baseRate) {
  if (baseWidth === void 0) {
    baseWidth = 375
  }
  if (baseRate === void 0) {
    baseRate = 100
  }
  function setHtmlFontSize() {
    var screenWidth = window.innerWidth
    // console.log(screenWidth, baseWidth, baseRate)
    var fontSize = (screenWidth / baseWidth) * baseRate
    // console.log(fontSize)
    document.documentElement.style.fontSize = fontSize + 'px'
  }
  setHtmlFontSize()
  window.onload = setHtmlFontSize
  window.onresize = setHtmlFontSize
}
