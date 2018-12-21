<template>
  <div class="kn-cell bd-btm-95" @click="clickCell">
    <!-- 单元格title -->
    <div class="cell-title fl">
      <slot name="title-icon">
        <icon v-if="icon" :icon="icon" class="g-mr8 fl"></icon>
      </slot>
      <slot name="title-txt">
        <!-- title关联文案 -->
        <div v-if="titleLabel" class="title-label fl">
          <div class="txt-main">{{title}}</div>
          <div class="txt-label">{{titleLabel}}</div>
        </div>
        <!-- title普通文案 -->
        <div v-else class="title-txt c-default fl">{{title}}</div>
      </slot>
      <slot name="title-info">
        <span v-if="hasInfo" class="title-info fr" @click.stop="clickInfo"></span>
      </slot>
    </div>
    <!-- 单元格value -->
    <div class="cell-value fr">
      <slot name="value-txt">
        <div class="value-txt fl">{{value}}</div>
      </slot>
      <slot name="value-icon">
        <div v-if="isLink" class="value-icon fl is-link"></div>
        <div v-else-if="isSelect" class="value-icon fl is-select"></div>
      </slot>
    </div>
  </div>
</template>
<script>
import Icon from '../icon'

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
@import './index.scss';
</style>
