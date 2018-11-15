# 本分支解决的问题
* 打包配置 - dist/lib.css, lib.common.js, dist/lib.umd.min.js
  * 使用单一入口打包命令 --target

```json
  // packages.json
  "scripts": {
    "build": "vue-cli-service build --target lib --name lib packages/index.js"
  }
```
* 代码测试覆盖率检查，上报
  * [mocha-webpack测试覆盖率](https://github.com/zinserjan/mocha-webpack/blob/master/docs/guides/code-coverage.md)

* 安装依赖
```bash
$ npm install --save-dev nyc istanbul-instrumenter-loader cross-env
```
* 配置scripts
```json
{
  "scripts": {
    "test:unit": "vue-cli-service test:unit",
    "cover": "cross-env NODE_ENV=coverage nyc --reporter=lcov --reporter=text npm run test:unit"
  },
  "nyc": {
    "include": [
      "packages/**/*.js"
    ],
    "instrument": false,
    "sourceMap": false
  }
}
```

* 配置vue.config.js

```js
// 自定义运行环境
process.env.VUE_APP_ENV_CUSTOM = process.env.VUE_APP_ENV_CUSTOM || ''
const isCoverage = process.env.VUE_APP_ENV_CUSTOM === 'coverage'
module.exports = {
  chainWebpack: config => {
    isCoverage ? config.module
      .rule('js|ts')
      .test(/\.(js|ts)/)
      .include.add(resolve('packages'))
      .use('istanbul-instrumenter-loader')
        .loader('istanbul-instrumenter-loader')
        .end() : []
  }
}
```

* 命令行中运行

```bash
npm run cover
```

* 根目录下生成以下两个文件夹即可
  * coverage
  * .nyc_output

* npm publish
  1. [注册](https://www.npmjs.com/signup)
  2. `npm adduser` 运行
  3. `npm init`生成标准package.json文件参考
  4. `npm publish`发布

