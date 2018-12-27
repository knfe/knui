<!-- 简体中文 -->

## Progress 进度条

### 使用指南
``` javascript
import KnProgress from 'kn-ui'

Vue.use(KnProgress);
```

### 代码演示

#### 进度条类型
<!-- 支持`'primary'`、`success`、`warning`、`'danger'`四种类型，默认为`'primary'` -->
支持有背景图标连接的进度条，和无背景图标连接的，默认为无背景图标连接的(即当前为镂空小圆环，走过的步骤为小圆点)

```html
<!-- 普通订单进程的步骤 当前步骤为无加速的背景图标 -->
<!-- useStepIcon默认为false，所以订单进程/审核结果进度部分可不传 -->
<kn-progress :step="0" :accelerate="false" :progressBtnText="this.progressBtnText"></kn-progress>
<kn-progress :step="1" :accelerate="false" :progressBtnText="this.progressBtnText"></kn-progress>
<kn-progress :step="2" :accelerate="false" :progressBtnText="this.progressBtnText"></kn-progress>
<kn-progress :step="3" :accelerate="false" :progressBtnText="this.progressBtnText"></kn-progress>

<!-- 注意：这个是订单进程里面数据结构示范 -->
progressBtnText: [
    { text: '审核通过'},
    { text: '排队中', img: require('../images/current-icon.png')},
    { text: '放款中'},
    { text: '银行到账'}
]

```

#### 当前步骤有加速背景的进度条（可在每个进度位置，自己配置不同的当前背景图标）

```html
<!-- 普通订单进程的步骤 有加速的 -->
<kn-progress :step="0" :accelerate="true" :progressBtnText="this.progressBtnTextAccelerate1"></kn-progress>
<kn-progress :step="1" :accelerate="true" :progressBtnText="this.progressBtnTextAccelerate2"></kn-progress>
<kn-progress :step="2" :accelerate="true" :progressBtnText="this.progressBtnTextAccelerate3"></kn-progress>
<kn-progress :step="3" :accelerate="true" :progressBtnText="this.progressBtnTextAccelerate4"></kn-progress>
```
progressBtnTextAccelerate1: [
    { text: '审核通过', img: require('../images/current-icon.png')},
    { text: '排队中'},
    { text: '放款中'},
    { text: '银行到账'}
],
    progressBtnTextAccelerate2: [
    { text: '审核通过'},
    { text: '排队中', img: require('../images/current-icon.png')},
    { text: '放款中'},
    { text: '银行到账'}
],
    progressBtnTextAccelerate3: [
    { text: '审核通过'},
    { text: '排队中'},
    { text: '放款中', img: require('../images/current-icon.png')},
    { text: '银行到账'}
],
    progressBtnTextAccelerate4: [
    { text: '审核通过'},
    { text: '排队中'},
    { text: '放款中'},
    { text: '银行到账', img: require('../images/current-icon.png')}
]

#### 进度条每一步都有背景图标，可根据需求换不同图标

```html
<!-- 进度条每一步都有背景图标，:useStepIcon="true" -->
<h2 class="tip">基本信息填写</h2>
<kn-progress :step="0" :useStepIcon="true" :progressBtnText="this.progressBtnText1"></kn-progress>
<kn-progress :step="1" :useStepIcon="true" :progressBtnText="this.progressBtnText1"></kn-progress>
<kn-progress :step="2" :useStepIcon="true" :progressBtnText="this.progressBtnText1"></kn-progress>
```
progressBtnText1: [
    { text: '基本信息', img: require('../images/step-info-1.png')},
    { text: '联系人', img: require('../images/step-info-2.png')},
    { text: '运营商认证', img: require('../images/step-info-3.png')}
]
### API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| step | 进度条的步骤，标记当前执行到哪个步骤了，从0开始 | Number | 0 | - |
| accelerate | 当前进度是否替换为加速图标（目前只有订单进程/审核结果页面才有，普通信息填写没有加速功能,图标可以自己替换） | Boolean | false | - |
| useStepIcon | 进度条的每个步骤是否都用背景图标 | Boolean | false | - |
| progressBtnText | 进度条每个步骤底部的文案（请特别注意，这个数组里面可配置背景图标，每一步骤文案颜色，每一步骤背景颜色，若不配置则为默认的橙色） | `Array` | - | - |

### Event

| 事件名 | 说明 | 参数 |
|------|------|------|
| - | - | - |
