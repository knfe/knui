<!-- English -->

# kn-radio

### install
``` javascript

import KnRadio from 'kn-ui'

Vue.use(KnRadio);

```

### demo

#### type of radio
two types, checked or unchecked, background or no-background

#### checked or unchecked

```html

<kn-radio :checked="true"></kn-radio>
<kn-radio :checked="false"></kn-radio>

```

#### set background color when checked

```html

<kn-radio :checked="true" :bgColor="'#4a90e2'"></kn-radio>
<kn-radio :checked="true" :bgColor="'#ffb500'"></kn-radio>
<kn-radio :checked="true" :bgColor="'#69c959'"></kn-radio>
<kn-radio :checked="true" :bgColor="'#f9c'"></kn-radio>
<kn-radio :checked="true" :bgColor="'#f00'"></kn-radio>

```

#### switch checked status, attention to set the 'checked'

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

#### select background image or not, just set 'nocheck'

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

| Attribute | Description | type | default | version |
|------|------|------|------|------|
| checked | checked or not | Boolean | true | - |
| nocheck | background image of radio | Boolean | false | - |
| bgColor | background color of radio | String | '#ff7015' | - |
| switch | switch check status of radio | `Function` | - | - |

### Event

| Event | Description | Arguments |
|------|------|------|
| - | - | - |


