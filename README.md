# 开发悉知

* 拉取代码

```bash
  git clone https://github.com/knfe/knui.git
  cd knui/
  # 您也可以使用yarn install
  npm install
  # 如果安装过程中发现 har-validator 安装失败，no match har-validator@5.1.2
  # or rm yarn-lock.json
  rm package-lock.json
  rm -r node_modules
  npm install
```

* 新建分支，在packages文件夹内新建UI组件名称，请勿重复命名
  * 代码规范遵循`standard`
  * 组件命名规则 - `小驼峰`
  * UI风格 - 待定（`默认橙色系 - UI设计规范`
  * 每个组件必须包含：
    * `demo`
    * `unit test`unit test文件请在根目录tests/unit中新增*.spec.js文件
    * `index.vue`
    * `index.scss`
      * 优先提取公共样式至 `style/*.scss`
      * [使用BEM规范](https://www.w3cplus.com/css/css-architecture-1.html)
      * [使用命名空间](https://www.w3cplus.com/css/css-architecture-2.html)
* 单个组件测试跑通，demo运行正常即可合并
  * 测试：`mocha` & `chai`
    * 配置test ?
  * demo:实例格式 - `待定`
* 编写脚本自动识别新增UI组件到index中导出 - webpack 配置

## kn-ui 项目结构说明：

* 本项目基于 vue-cli搭建，webpack4,可直接全局安装vue-cli便于使用
* 主要文件夹说明

```bash
|____ .editorconfig - 编辑器通用配置
|____ .eslintrc.js - eslint 配置
|____ .gitignore
|____ .prettierrc.js - 代码格式化插件配置
|____ babel.config.js - babel 配置
|____ package.json
|____ package-lock.json
|____ README.md
|____ examples - 原src目录，用来存放docs的一些文件
| |____ assets
| |____ components
| |____ docs - 对应的UI组件说明演示文档
|____ packages 所有UI组件存放目录
| |____ button button组件
| |   |____ demo 每个UI组件包含的demo # unit test文件请在根目录tests/unit中新增*.spec.js文件，说明如下：
| |   |____ zn-CN.md 单个UI组件说明（中文）
| |   |____ en-US.md 单个UI组件说明（English）
| |   |____ index.scss 每个UI组件的样式文件
| |   |____ index.vue button组件的源码
| |____ index.js 统一导出文件
|____ public 静态资源文件夹
|____ vue.config 自定义配置
|____ node_modules
```

* packages所有组件下的组件测试请在tests/unit下新建.spec.js文件
  * [vue-cli:test:unit默认路径分离不是必要的](https://github.com/vuejs/vue-cli/issues/1245)
  * [@vue/cli-plugin-unit-mocha](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-mocha)

* 部分主要npm包的使用说明
  * 样式单独抽离postcss - `vue cli3默认使用了postcss,只需提供一个配置文件即可`
    * [详见vue-cli3 postcss配置说明](https://cli.vuejs.org/zh/guide/css.html#postcss)
    * 参考官网配置 [postcss-loader](https://github.com/postcss/postcss)
  * webpack 单独打包样式文件
    * 打包至根目录lib/index
  * babel-import 按需引入整个组件

## 组件开发划分

### 样式书写注意
  * 公共样式务必写到style/*.scss文件内，组内样式写在index.scss内
  * 样式命名规范务必先阅读`BEM规范`和`命名空间`

### 布局组件
  * row
  * col
  * grid

### 基础组件
  * alert
  * dialog
  * button - keren
  * card
  * checkout
  * redio
  * input
  * loading
  * spinner
  * progress
  * select
  * piker3
  * form
  * dropdown
  * swipe
  * option