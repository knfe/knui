const { BABEL_MODULE, NODE_ENV } = process.env
const useESModules = BABEL_MODULE !== 'commonjs' && NODE_ENV !== 'test' // babel模块和test环境使用commonjs
module.exports = {
  presets: [
    // 预设置
    [
      '@babel/preset-env',
      {
        modules: useESModules ? false : 'commonjs'
      }
    ]
  ],
  plugins: [
    '@babel/plugin-syntax-dynamic-import'
  ]
}
