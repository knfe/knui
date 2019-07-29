<template>
  <div class="kn-cell-demo">
    <app :title="'姓名'" :icon="'info'" :value="'李某某'"/>
    <app :title="'关系'" :value="'配偶'" isSelect></app>
    <app :title="'其他信息'" is-select>
      <icon slot="title-icon" :icon="'info'" class="g-mr8 fl"></icon>
    </app>
    <app
      :title="'现居城市'"
      :value="'上海市'"
      isSelect
      hasInfo
      @clickInfo="clickInfo"
      @clickCell="clickCell"
    >
      <icon slot="title-icon" :icon="'city'" class="g-mr8 fl"></icon>
    </app>
    <app :title="'会员认证'" :value="'已认证'" isLink></app>
    <app :title="'性别'" :value="'男'" isSelect hasInfo></app>
    <app :title="'姓名'" :value="'已认证'" :title-label="'请填写你的姓名哦'"></app>
    <app :title="'优惠券'" :value="'立减100元'" :value-label="'选择您的优惠券'"></app>
    <app :title="'会员认证'" :value="'已认证'" is-select :title-label="'认证可以获得更多权限哦'"></app>
    <app :title="'姓名'">
      <input slot="value-txt" type="text" placeholder="请输入您的姓名">
    </app>
    <app :title="'姓名'">
      <input
        slot="value-txt"
        type="text"
        placeholder="请输入您的姓名"
        style="display:block; line-height: 0.22rem; float: left"
      >
      <icon slot="value-icon" :icon="'lock-on'" class="g-ml8"></icon>
    </app>
  </div>
</template>
<script>
import icon from '../../icon/'
import app from '../index'
export default {
  name: 'kn-cell-demo',
  data() {
    return {
      msg: 'kn-cell-demo'
    }
  },
  methods: {
    clickInfo() {
      console.log('点击了title的info信息')
    },
    clickCell() {
      console.log('点击了整个单元格')
    }
  },
  components: {
    app,
    icon
  }
}
</script>
<style lang="scss">
@import '../../style/index.scss';

html,
body {
  margin: 0;
  padding: 0;
}
.kn-cell-demo {
  .f {
    width: 100%;
    height: px2rem(55);
    background-color: cyan;
    line-height: px2rem(55);
    text-align: center;

    img {
      display: inline-block;
      width: px2rem(22);
      height: px2rem(22);
      vertical-align: middle;
    }

    span {
      display: inline-block;
      vertical-align: middle;
    }
  }
}
</style>
