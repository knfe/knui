<!-- 简体中文 -->

# kn-message

### 使用指南

```js
import knMessage from 'kn-ui'

Vue.prototype.$knMessage = knMessage
```

### 代码演示

#### 基础用法

```js
this.$knMessage.open()
```

### methods

| 事件名   | 说明               | 参数   | 参数说明     |
| -------- | ------------------ | ------ | ------------ |
| open     | 打开新的 Message   | config | Message 配置 |
| close    | 关闭指定的 Message | index  | Message 编号 |
| closeAll | 关闭所有的 Message | -      | -            |

### open 方法 API

| 参数                      | 说明                                              | 类型      | 默认值                 | 可选值 |
| ------------------------- | ------------------------------------------------- | --------- | ---------------------- | ------ |
| title                     | Message 标题                                      | `String`  | 空                     | -      |
| message                   | Message 内容                                      | `String`  | `这里需要填写提示内容` | -      |
| shadowClose               | 背景点击是否可以关闭 loading                      | `Boolean` | `false`                | -      |
| btn                       | 按钮文案                                          | `Array`   | `['确认']`                   | -      |
| leftBtnCloseLoading       | 左按钮点击时是否有 loading 效果                   | `Boolean` | `false`                | -      |
| rightBtnCloseLoading      | 右按钮点击时是否有 loading 效果                   | `Boolean` | `false`                | -      |
| leftBtnClick(inputValue)  | 左按钮点击的回调，不写默认为关闭，参数为 input 值 | `Fuction` | -                      | -      |
| rightBtnClick(inputValue) | 右按钮点击的回调，不写默认为关闭，参数为 input 值 | `Fuction` | -                      | -      |
| className                 | 自定义类名                                        | `String`  | -                      | -      |
| lockScroll                | 是否将 body 滚动锁定                              | `Boolean` | `true`                 | -      |
| hasInput                  | 是否有输入框                                      | `Boolean` | `false`                | -      |
| inputType                 | 输入框类型                                        | `String`  | `text`                 | -      |
| inputMaxlength            | 输入框最大输入                                    | `Number`  | -                      | -      |
| hasCountDown              | 是否有倒计时                                      | `Boolean` | `false`                | -      |
| countDownTime             | 倒计时的时间                                      | `Number`  | `60`                   | -      |
| countDownClick            | 倒计时触发时的回调                                | `Fuction` | -                      | -      |
