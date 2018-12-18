<template>
  <div class="kn-cell clearfix bd-btm-95">
    <div class="cell-title fl">
      <slot name="title-icon">
        <div class="title-icon fl"></div>
      </slot>
      <slot name="title-txt">
        <!-- title关联文案 -->
        <div v-if="titleLabel" class="title-label fl">
          <div class="txt-main">中国工商银行（5789）</div>
          <div class="txt-label">银行维护中，暂无法使用</div>
        </div>
        <!-- title普通文案 -->
        <div v-else class="title-txt c-default fl">{{title}}</div>
      </slot>
    </div>
    <div class="cell-value fr">
      <slot name="value-txt">
        <div class="value-txt fl">{{value}}</div>
      </slot>
      <slot name="value-icon">
        <div v-if="isLink" class="value-icon fl cell-link"></div>
        <div v-else-if="isSelect" class="value-icon fl cell-select"></div>
      </slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'kn-cell',
  data() {
    return {
      msg: 'hello kn-cell'
    }
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
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
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss">
@import './index.scss';
</style>
