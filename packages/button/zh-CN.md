<!-- 简体中文 md-->

## Button 按钮

### 使用指南
``` javascript
import KnButton from 'kn-ui'

Vue.use(KnButton);
```

### 代码演示

#### 按钮类型
支持`'primary'`、`success`、`warning`、`'danger'`四种类型，默认为`'primary'`

```html
<kn-button :type="''primary''">主要按钮</kn-button>
<kn-button :type="'success'">成功按钮</kn-button>
<kn-button :type="'warning'">警告按钮</kn-button>
<kn-button :type="''danger''">危险按钮</kn-button>
```

#### 朴素按钮

```html
<kn-button :plain="true">朴素按钮</kn-button>
<kn-button :plain="true" :type="'danger'">危险的朴素按钮</kn-button>
```

#### 禁用状态

通过`disabled`属性来禁用按钮，此时按钮不可点击

```html
<kn-button :disabled="true" :type="''primary'">禁用状态</kn-button>
<kn-button :disabled="true" :type="''danger'">禁用状态</kn-button>
```

#### 按钮尺寸
支持`large`、`middle`、`small` 三种尺寸，默认为`large`

```html 
<kn-button :size="'large'">大号按钮</kn-button>
<kn-button :size="'middle'">中型按钮</kn-button>
<kn-button :size="'small'">迷你按钮</kn-button>
```


### API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| type | 类型，可选值为 `'primary'` `warning` `'danger'` | `String` | `primary` | - |
| size | 尺寸，可选值为 `large` `small` `middle` | `String` | `large` | - |
| disabled | 是否禁用按钮 | `Boolean` | `false` | - |
| plain | 是否为朴素按钮 | `Boolean` | `false` | - |

### Event

| 事件名 | 说明 | 参数 |
|------|------|------|
| click | 点击按钮,禁用时不能触发 | - |