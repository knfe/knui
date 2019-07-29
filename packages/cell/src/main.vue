<template>
  <div class="kn-cell kn-bd-btm-95" @click="clickCell">
    <div class="cell-title kn-fl">
      <slot name="title-icon">
        <icon v-if="icon" :icon="icon" class="g-mr8 kn-fl"></icon>
      </slot>
      <slot name="title-txt">
        <div v-if="titleLabel" class="title-label kn-fl">
          <div class="txt-main">{{title}}</div>
          <div class="txt-label">{{titleLabel}}</div>
        </div>
        <div v-else class="title-txt c-default kn-fl">{{title}}</div>
      </slot>
      <slot name="title-info">
        <span v-if="hasInfo" class="title-info kn-fr" @click.stop="clickInfo"></span>
      </slot>
    </div>
    <div class="cell-value kn-fr">
      <slot name="value-txt">
        <div v-if="valueLabel" class="value-label kn-fl">
          <div class="txt-main">{{value}}</div>
          <div class="txt-label">{{valueLabel}}</div>
        </div>
        <div v-else class="value-txt kn-fl">{{value}}</div>
      </slot>
      <slot name="value-icon">
        <div v-if="isLink" class="value-icon kn-fl is-link"></div>
        <div v-else-if="isSelect" class="value-icon kn-fl is-select"></div>
      </slot>
    </div>
  </div>
</template>
<script>
import Icon from '../../icon'

export default {
  name: 'kn-cell',
  data() {
    return {
      msg: 'hello kn-cell'
    }
  },
  props: {
    title: {
      type: String
    },
    value: {
      type: String
    },
    isLink: {
      type: Boolean,
      default: false
    },
    isSelect: {
      type: Boolean,
      default: false
    },
    titleLabel: {
      type: String
    },
    valueLabel: {
      type: String
    },
    hasInfo: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String
    }
  },
  methods: {
    clickInfo() {
      this.$emit('clickInfo')
    },
    clickCell() {
      this.$emit('clickCell')
    }
  },
  components: {
    Icon
  }
}
</script>
<style lang="scss">
@import './main.scss';
</style>
