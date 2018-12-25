<!-- English md -->

## Progress

### Install
``` javascript
import KnProgress from 'kn-ui'

Vue.use(KnProgress);
```

### Usage

#### Type
You can use background icon in every step container or not, if background icon don't be used , then it shows like a hollow circle

```html
<kn-progress :step="0" :accelerate="false" :progressBtnText="this.progressBtnText"></kn-progress>
<kn-progress :step="1" :accelerate="false" :progressBtnText="this.progressBtnText"></kn-progress>
<kn-progress :step="2" :accelerate="false" :progressBtnText="this.progressBtnText"></kn-progress>
<kn-progress :step="3" :accelerate="false" :progressBtnText="this.progressBtnText"></kn-progress>
```
progressBtnText: [
    { text: '审核通过'},
    { text: '排队中', img: require('../images/current-icon.png')},
    { text: '放款中'},
    { text: '银行到账'}
]

#### use background icon in the current step container, you can change the background icon in your demand

```html
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

#### use background icon in every step container , you can change the background icon in your demand

```html
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

| Attribute | Description | type | default | version |
|------|------|------|------|------|
| step | the current step , start from 0, the default is 0 | Number | 0 | - |
| accelerate | Whether use background icon in current step container or not | Boolean | false | - |
| useStepIcon | Whether use background icon in every step container or not | Boolean | false | - |
| progressBtnText | text under step container | `Array` | - | - |


### Event

| Event | Description | Arguments |
|------|------|------|
| - | - | - |
