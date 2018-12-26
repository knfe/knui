<!-- English -->

# kn-pullrefresh

### Install

```js
import KnPullRefresh from 'kn-ui'

Vue.use(KnPullRefresh)
```

### Usage

#### Basic Usage

The refresh event will be triggered when pull refresh, you should set v-model to false to reset loading status after process refresh event.

```html
<van-pull-refresh v-model="isLoading" @refresh="onRefresh"></van-pull-refresh>
```

```js
export default {
  data() {
    return {
      isLoading: false
    }
  },

  methods: {
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false
      }, 500)
    }
  }
}
```

### API

| Attribute          | Description               | Type      | Default               | 版本 |
| ------------------ | ------------------------- | --------- | --------------------- | ---- |
| v-model            | Loading status            | `Boolean` | -                     | -    |
| pulling-text       | Text to show when pulling | `String`  | `Pull to refresh...`  | -    |
| loosing-text       | Text to show when loosing | `String`  | `Loose to refresh...` | -    |
| loading-text       | Text to show when loading | `String`  | `Loading...`          | -    |
| animation-duration | Animation duration        | `Number`  | `300`                 | -    |
| head-height        | Height of head            | `Number`  | `50`                  | -    |
| disabled           | Whether to disable        | `Boolean` | `false`               | -    |

### Event

| Event   | Description                 | Parameters |
| ------- | --------------------------- | ---------- |
| refresh | Triggered when pull refresh | -          |

### Slot

| name    | Description                           |
| ------- | ------------------------------------- |
| normal  | Content of head when at normal status |
| pulling | Content of head when at pulling       |
| loosing | Content of head when at loosing       |
| loading | Content of head when at loading       |
