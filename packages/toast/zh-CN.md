<!-- 简体中文 -->

# kn-toast

### 使用指南

```js
import knToast from 'kn-ui'

Vue.prototype.$knToast = knToast
```

### 代码演示

#### 基础用法

```js
this.$knToast.open({
  hint: '请提示'
})
```

### methods

| 事件名   | 说明             | 参数   | 参数说明   |
| -------- | ---------------- | ------ | ---------- |
| open     | 打开新的 Toast   | config | Toast 配置 |
| close    | 关闭指定的 Toast | index  | Toast 编号 |
| closeAll | 关闭所有的 Toast | -      | -          |

### open 方法 API

| 参数      | 说明               | 类型     | 默认值   | 可选值 |
| --------- | ------------------ | -------- | -------- | ------ |
| type      | Toast 类型         | `String` | `tip`    | -      |
| hint      | Toast 内容         | `String` | `轻提示` | -      |
| time      | Toast 时间，单位/S | `Number` | `2`      | -      |
| className | 自定义类名         | `String` | -        | -      |
