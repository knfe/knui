/**
 * vue cli 3 工具配置
 * @module vue.config
 * @see {@link https://cli.vuejs.org/config/#global-cli-config}
 */
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, './', dir)
}

// 自定义运行环境
process.env.VUE_APP_ENV_CUSTOM = process.env.VUE_APP_ENV_CUSTOM || ''

module.exports = {
  // 入口
  pages: {
    index: {
      // page 的入口
      entry: './examples/main.js'
    }
  },
  chainWebpack: config => {
    // 修改别名src为packages
    config.resolve.alias.set('@', resolve('packages'))

    config.module
      .rule('compile')
      .test(/\.js$/)
      .include.add(resolve('examples'))
      .add(resolve('test'))
      .add(resolve('packages'))
      .end()
      .use('babel')
      .loader('babel-loader')
  },
  // 是否生成 .js.map 文件
  productionSourceMap: false,
  // css 文件处理配置
  css: {
    // 是否提取 css 文件到单独的文件中，开发环境不要开启，否则样式热更新不可用
    extract: process.env.NODE_ENV === 'production',
    // 是否生成 .css.map 文件
    sourceMap: false,
    loaderOptions: {
      // 给 css-loader 传递选项
      css: {
        importLoaders: 1
      }
    }
  }
}
