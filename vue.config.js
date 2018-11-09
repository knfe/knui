/**
 * vue cli 3 工具配置
 * @module vue.config
 * @see {@link https://cli.vuejs.org/config/#global-cli-config}
 */
const utils = require('./examples/utils')
const path = require('path')
const MarkdownItContainer = require('markdown-it-container')

const vueMarkdown = {
  preprocess: (MarkdownIt, source) => {
    MarkdownIt.renderer.rules.table_open = function () {
      return '<table class="table">'
    }
    MarkdownIt.renderer.rules.fence = utils.wrapCustomClass(MarkdownIt.renderer.rules.fence)

    // ```html `` 给这种样式加个class hljs
    //  但是markdown-it 有个bug fence整合attr的时候直接加载class数组上而不是class的值上
    //  markdown-it\lib\renderer.js 71行 这么修改可以修复bug
    //  tmpAttrs[i] += ' ' + options.langPrefix + langName --> tmpAttrs[i][1] += ' ' + options.langPrefix + langName
    // const fence = MarkdownIt.renderer.rules.fence
    // MarkdownIt.renderer.rules.fence = function(...args){
    //   args[0][args[1]].attrJoin('class', 'hljs')
    //   var a = fence(...args)
    //   return a
    // }

    // ```code`` 给这种样式加个class codeInline
    const codeInline = MarkdownIt.renderer.rules.codeInline
    MarkdownIt.renderer.rules.codeInline = function (...args) {
      args[0][args[1]].attrJoin('class', 'codeInline')
      return codeInline(...args)
    }
    return source
  },
  use: [
    [MarkdownItContainer, 'demo', {
      validate: params => params.trim().match(/^demo\s*(.*)$/),
      render: function (tokens, idx) {
        // var m = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
        if (tokens[idx].nesting === 1) {
          // var desc = tokens[idx + 2].content
          const html = utils.convertHtml(utils.tags2dom(tokens[idx + 1].content, 'script'))
          // 移除描述，防止被添加到代码块
          tokens[idx + 2].children = []

          return `<demo-block>
                  <div slot="desc">${html}</div>
                  <div slot="highlight">`
        }
        return '</div></demo-block>\n'
      }
    }]
  ]
}

function resolve (dir) {
  return path.join(__dirname, './', dir)
}

module.exports = {
  // 入口
  pages: {
    app: {
      // entry for the page
      entry: 'examples/main.js',
      // the source template
      template: 'examples/index.html',
      // output as dist/index.html
      filename: 'index.html'
    }
  },
  chainWebpack: config => {
    // 修改别名src为examples
    config.resolve.alias.set('@', resolve('examples'))

    config.module
      .rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
        raw: true,
        vueMarkdown
      })

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
  // 需要 babel 转码的 node 模块
  transpileDependencies: ['knife'],
  // css 文件处理配置
  css: {
    // 是否提取 css 文件到单独的文件中，开发环境不要开启，否则样式热更新不可用
    extract: process.env.NODE_ENV === 'production',
    // 是否生成 .css.map 文件
    sourceMap: false
  }
}
