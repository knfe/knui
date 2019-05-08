<!-- 简体中文 -->

# kn-loading

### 使用指南

```js
import KnLoading from 'kn-ui'

Vue.prototype.$knLoading = KnLoading
```

### 代码演示

#### 基础用法

```js
this.$knLoading.open()
```

### methods

| 事件名   | 说明               | 参数   | 参数说明     |
| -------- | ------------------ | ------ | ------------ |
| open     | 打开新的 loading   | config | loading 配置 |
| close    | 关闭指定的 loading | index  | loading 编号 |
| closeAll | 关闭所有的 loading | -      | -            |

### open 方法 API

| 参数        | 说明                              | 类型      | 默认值                  | 可选值                            |
| ----------- | --------------------------------- | --------- | ----------------------- | --------------------------------- |
| type        | Loading 类型                      | `String`  | `circular`              | `['circular','bubble','spinner']` |
| shadow      | 背景色（支持 css 颜色写法）       | `String`  | 不同 loading 不同默认值 | -                                 |
| shadowClose | 背景点击是否可以关闭 loading      | `Boolean` | `false`                 | -                                 |
| content     | 内容区域颜色（支持 css 颜色写法） | `String`  | `transparent`           | -                                 |
| hint        | 中心内容区域文案                  | `String`  | `加载中...`             | -                                 |
| time        | 至少 n 秒后关闭                   | `Number`  | -                       | -                                 |
