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
| |____ docs 对应的组件说明演示文档
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

- 每个组件必须包含
  - demo
    - index.js
    - index.vue
  - index.vue
  - index.scss
