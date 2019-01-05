<!-- 简体中文 -->

# kn-cell

### 使用指南

```javascript
import KnCell from 'kn-ui'

Vue.use(KnCell)
```

### 代码演示

#### 基础用法

```html
<kn-cell icon="city" />

<kn-cell icon="face" :icon-size="small" />
```

#### 展示箭头或者展示下拉箭头

传入`is-link`或者`is-select`属性，则会在右侧显示箭头或者下拉箭头

```html
<kn-cell title="单元格标题" value="单元格内容" isLink /> <kn-cell title="单元格标题" value="单元格内容" isSelect />
```

#### 展示标题信息按钮

传入`has-info`属性，则会在左边标题右侧显示标题信息按钮

```html
<kn-cell title="单元格标题" value="单元格内容" hasInfo />
```

#### 高级用法

单元格提供四个插槽位置，分别为 标题图标插槽`<slot name="title-icon"/>` , 标题文字插槽`<slot name="title-txt"/>` , 内容文字插槽`<slot name="value-txt"/>` , 内容图标插槽`<slot name="value-icon"/>`

示例：

```html
<kn-cell :title="'姓名'">
  <icon slot="title-icon" :icon="'info'"></icon> // 标题图标
  <p slot="title-txt">我是标题</p>
  // 标题文字插槽
  <p slot="value-txt">我是内容</p>
  // 内容文字插槽 <icon slot="value-icon" :icon="'lock-on'" class="g-ml8"></icon> // 内容图标
</kn-cell>
```

### Cell API

| 参数        | 说明                        | 类型      | 默认值  | 版本 |
| ----------- | --------------------------- | --------- | ------- | ---- |
| title       | 左侧标题                    | `String`  | -       | -    |
| icon        | 左侧标题图标                | `String`  | -       | -    |
| value       | 右侧内容                    | `String`  | -       | -    |
| title-label | 标题下方的描述信息          | `String`  | -       | -    |
| value-label | 内容下方的描述信息          | `String`  | -       | -    |
| is-link     | 是否展示右侧链接箭头(向右)  | `Boolean` | `false` | -    |
| is-select   | 是否展示右侧下拉箭头 (向下) | `Boolean` | `false` | -    |
| has-info    | 是否标题右侧信息按钮        | `Boolean` | `false` | -    |

### Cell Event

| 事件名    | 说明                     | 参数 |
| --------- | ------------------------ | ---- |
| clickCell | 点击 整个单元格 时触发   | -    |
| clickInfo | 点击 标题信息按钮 时触发 | -    |

### Cell Slot

| 名称       | 说明           |
| ---------- | -------------- |
| -          | 自定义显示内容 |
| title-icon | 自定义标题图标 |
| title-txt  | 自定义标题文字 |
| value-txt  | 自定义内容文字 |
| value-icon | 自定义内容图标 |
