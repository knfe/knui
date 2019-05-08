## Contribution

贡献代码请先熟悉[Contributing Guide](./wikis/contributing.md)

## LICENSE

[MIT](https://zh.wikipedia.org/wiki/MIT%E8%A8%B1%E5%8F%AF%E8%AD%89)

# 安装

- npm

```bash
npm i kn-ui
```

## 使用

- 方式一: 引入所有组件

```js
// main.js
// 导入kn-button组件
import Vue from 'vue'
import KnUi from 'kn-ui'
// 引入css
import 'kn-ui/dist/lib.css'
Vue.use(KnUi)
```

- 按需引入

```js
// main.js
// 导入所有组件
import Vue from 'vue'
import KnButton from 'kn-ui'
import knLoading from 'kn-ui'
// 引入css
import 'kn-ui/dist/lib.css'

Vue.use(KnButton)
Vue.prototype.$knLoading = KnLoading
// 或者注册单个组件
Vue.component(KnButton.name, KnButton)
```

## 组件

[knLoading](./packages/loading/zh-CN.md)

[knPullRefresh](./packages/pullRefresh/zh-CN.md)

[KnButton](./packages/button/zh-CN.md)

[KnCell](./packages/cell/zh-CN.md)

[KnIcon](./packages/icon/zh-CN.md)

[KnProgress](./packages/progress/zh-CN.md)

[KnPullRefresh](./packages/pullRefresh/zh-CN.md)

[KnRadio](./packages/radio/zh-CN.md)
