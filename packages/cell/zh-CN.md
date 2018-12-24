<!-- 简体中文 -->

# kn-cell

### 使用指南

```javascript
import KnPullRefresh from 'kn-ui'

Vue.use(KnPullRefresh)
```

### 代码演示

#### 基础用法

```html
<kn-cell icon="city" />

<kn-cell icon="face" :icon-size="small" />
```

### Cell API

| 参数      | 说明     | 类型     | 默认值   | 版本 |
| --------- | -------- | -------- | -------- | ---- |
| icon      | 图标类型 | `String` | -        | -    |
| icon-size | 图标大小 | `String` | `normal` | -    |

### Cell Event

| 事件名 | 说明           | 参数 |
| ------ | -------------- | ---- |
| click  | 点击图标时触发 | -    |
