# kn-ui 一期：项目结构搭建
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
| |   |____ demo 每个UI组件包含的demo
| |   |____ test 每个UI组件包含的单元测试
| |   |____ in18 每个UI组件包含的语言（应该目前只支持中文和英文）
| |   |____ index.scss 每个UI组件的样式文件
| |   |____ index.vue button组件的源码
| |____ index.js 统一导出文件夹
|____ public 静态资源文件夹
|____ vue.config 自定义配置
|____ node_modules
```
* 需要用到的关键包
  * 包管理工具 - lerna
  * gulp ? rollup 单独打包样式文件
  * babel-import 按需引入整个组件