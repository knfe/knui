# 贡献代码指南

## 开始

```zsh
# init
git clone https://github.com/knfe/knui.git

cd knui

npm install

# checkout a new branch
git checkout -b feature-button

# create a component named button
npm run create -- --name button
# 请同步更新plans.md，将自己的github id后缀到开发的组件名称后面！

# develop
npm run serve

# visit http://localhost:8080/button/
```

## 目录结构

```zsh
|____ .editorconfig 编辑器通用配置
|____ .eslintrc.js eslint 配置
|____ .gitignore
|____ .prettierrc.js 代码格式化插件配置
|____ babel.config.js babel 配置
|____ package.json
|____ package-lock.json
|____ README.md
|____ vue.config.js vue cli 自定义配置
|____ public 静态资源文件夹
|____ scripts 相关开发脚本
|____ examples 原src目录，用来存放docs的一些文件
| |____ assets
| |____ components
| |____ docs 
|____ packages 所有组件存放目录
| |____ button 按钮组件
| | |____ demo 组件使用示例
| | | |____ index.js 示例入口文件
| | | |____ index.vue 示例组件
| | | |____ index.html 示例组件 html 文件（可选）
| | |____ zn-CN.md 组件说明（中文）
| | |____ en-US.md 组件说明（English）
| | |____ index.scss 组件样式文件
| | |____ index.vue 组件源码
| |____ index.js 统一导出文件
```

## 代码规范

### JS

- 代码规范遵循`eslint standard`

### CSS/SCSS

- [使用 BEM 规范](https://www.w3cplus.com/css/css-architecture-1.html)
- [使用命名空间](https://www.w3cplus.com/css/css-architecture-2.html)

### 组件

* 新建分支，`npm run create -- --name ui-components-name`，请勿重复命名
  * 组件命名规则 - `小驼峰`
  * UI风格 - 待定`默认橙色系 - UI设计规范`
  * 每个组件必须包含：
    * `demo`
    * `unit test` - 单元测试在根目录下test/unit/ui-components-name.spec.js,新建组件会自动生成，但是需要自行补充测试用例
    * `index.vue`
    * `index.scss`
      * 优先提取公共样式至 `style/*.scss`
      * [使用BEM规范](https://www.w3cplus.com/css/css-architecture-1.html)
      * [使用命名空间](https://www.w3cplus.com/css/css-architecture-2.html)
* 组件测试跑通，demo运行正常即可合并
  * 测试：`mocha` & `chai`
* 工具类的代码更新请新建单独分支，不要和组件开发混在一起

* packages所有组件下的组件测试都在tests/unit下，`请自行补充测试用例代码`
  * [vue-cli:test:unit默认路径分离不是必要的](https://github.com/vuejs/vue-cli/issues/1245)
  * [@vue/cli-plugin-unit-mocha](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-mocha)

* 部分主要npm包的使用说明
  * 样式单独抽离postcss - `vue cli3默认使用了postcss,只需提供一个配置文件即可`
    * [详见vue-cli3 postcss配置说明](https://cli.vuejs.org/zh/guide/css.html#postcss)
    * 参考官网配置 [postcss-loader](https://github.com/postcss/postcss)
