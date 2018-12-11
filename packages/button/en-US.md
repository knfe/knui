<!-- English md -->

## Button

### Install
``` javascript
import KnButton from 'kn-ui'

Vue.use(KnButton);
```

### Usage

#### Type
Support ``primary'`, `success`, `warning`, `'danger'` four types, the default is `'primary'`

```html
<kn-button :type="''primary''">Primary</kn-button>
<kn-button :type="'success'">Success</kn-button>
<kn-button :type="'warning'">Warning</kn-button>
<kn-button :type="''danger''">Danger</kn-button>
```

#### Plain

```html
<kn-button :plain="true">Plain and Primary</kn-button>
<kn-button :plain="true" :type="'danger'">Plain and Danger</kn-button>
```

#### Disabled
Disable the button with the `disabled` property, the button is not clickable

```html
<kn-button :disabled="true" :type="''primary'">Disabled and primary</kn-button>
<kn-button :disabled="true" :type="''danger'">Disabled and danger</kn-button>
```

#### Size
Supports `large`, `middle`, `small` three sizes, the default is `large`

```html 
<kn-button :size="'large'">Large</kn-button>
<kn-button :size="'middle'">Middle</kn-button>
<kn-button :size="'small'">Small</kn-button>
```


### API

| Attribute | Description | type | default | version |
|------|------|------|------|------|
| type | Can be set to `'primary'` `warning` `'danger'` | `String` | `primary` | - |
| size | Can be set to `large` `small` `middle` | `String` | `large` | - |
| disabled | Whether to disable button | `Boolean` | `false` | - |
| plain | Whether to plain button | `Boolean` | `false` | - |

### Event

| Event | Description | Arguments |
|------|------|------|
| click | Click button, it can't be triggered when disabled | - |