<!-- 简体中文 -->

# kn-radio

### 使用指南
``` javascript
import KnRadio from 'kn-ui'

Vue.use(KnRadio);
```

### 代码演示

#### 单选按钮类型
支持有勾背景图标的单选按钮，和空心圆背景图标的单选按钮，默认为有勾的

#### 选中和为选中的状态

```html

<kn-radio :checked="true"></kn-radio>
<kn-radio :checked="false"></kn-radio>

```

#### 选中的时候背景颜色可配置，不配置则为默认颜色（未选中的时候都是灰色）

```html

<kn-radio :checked="true" :bgColor="'#4a90e2'"></kn-radio>
<kn-radio :checked="true" :bgColor="'#ffb500'"></kn-radio>
<kn-radio :checked="true" :bgColor="'#69c959'"></kn-radio>
<kn-radio :checked="true" :bgColor="'#f9c'"></kn-radio>
<kn-radio :checked="true" :bgColor="'#f00'"></kn-radio>

```

#### 可点击切换选中与否，只需加上@switch事件，处理函数可自定义，但需要把checked状态取反

```html

<kn-radio :checked="checked1" @switch="onSwitch1"></kn-radio>
<kn-radio :checked="checked2" @switch="onSwitch2"></kn-radio>

```
onSwitch1(msg) {
    this.checked1 = !this.checked1
},
onSwitch2() {
    this.checked2 = !this.checked2
}

#### 没有勾的背景，即空心圆，nocheck来标记，选中的时候为有勾的实心圆，并且可配置颜色，注意：checked 和 nocheck 状态都要取反

```html

<kn-radio :checked="checked3" :nocheck="nocheck1" @switch="onSwitch3" ></kn-radio>
<kn-radio :checked="checked4" :nocheck="nocheck2" :bgColor="'#69c959'" @switch="onSwitch4" ></kn-radio>

```

onSwitch3() {
    this.checked3 = !this.checked3
    this.nocheck1 = !this.nocheck1
},
onSwitch4() {
    this.checked4 = !this.checked4
    this.nocheck2 = !this.nocheck2
}

### API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| checked | 单选按钮是否是选中的状态 | Boolean | true | - |
| nocheck | 按钮背景是否有勾，没有则为空心圆 | Boolean | false | - |
| bgColor | 单选按钮的背景颜色 | String | '#ff7015' | - |
| switch | 点击切换选中与否 | `Function` | - | - |

### Event

| 事件名 | 说明 | 参数 |
|------|------|------|
| - | - | - |

