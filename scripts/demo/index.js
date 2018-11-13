/**
 * 获取所有预览组件 demo 的入口
 */

const glob = require('glob')
const path = require('path')

const pages = {}

glob.sync(path.resolve(process.cwd(), './packages/**/**/demo/index.js')).forEach(el => {
  let tmp = el.split('/')
  let key = tmp[tmp.length - 3]
  pages[key] = {
    entry: el,
    filename: (process.env.NODE_ENV === 'production' ? 'dist/' : '') + key + '/index.html'
  }
})

module.exports = pages
