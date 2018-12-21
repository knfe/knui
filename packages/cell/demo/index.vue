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
    <app :title="'学信网认证'" :value="'已认证'" isLink></app>
    <app :title="'用途'" :value="'学习'" isSelect hasInfo></app>
    <app :title="'姓名'" :value="'已认证'" :title-label="'请填写你的姓名哦'"></app>
    <app :title="'学信网'" :value="'已认证'" is-select :title-label="'未认证可能导致失败'"></app>
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
    <svg
      width="28px"
      height="28px"
      viewBox="0 0 28 28"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      style="width: 1rem; height: 1rem; background: red;"
    >
      <!-- Generator: Sketch 52.5 (67469) - http://www.bohemiancoding.com/sketch -->
      <title>Page 1 Copy 2</title>
      <desc>Created with Sketch.</desc>
      <g id="贷上钱UI规范V1.0" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="移动端视觉规范-列表篇" transform="translate(-476.000000, -1939.000000)" fill="#FF7015">
          <g id="Group-29" transform="translate(304.000000, 1898.000000)">
            <path
              d="M187.882993,50.0883105 C186.991655,50.0883105 186.272959,49.4419727 186.272959,48.4853516 C186.272959,47.5287305 186.993945,46.8823926 187.882993,46.8823926 C188.769648,46.8823926 189.495317,47.5287305 189.495317,48.4853516 C189.495317,49.4419727 188.771938,50.0883105 187.882993,50.0883105 L187.882993,50.0883105 Z M188.195703,60.149751 C187.138662,61.7364063 186.065352,62.9567578 184.254614,62.9567578 C183.020283,62.7560889 182.513979,61.8716895 182.782358,60.9709521 L185.108696,53.2686279 C185.164648,53.0797168 185.071338,52.8790479 184.898696,52.8183105 C184.728345,52.7576758 184.39,52.9817236 184.098276,53.2989453 L182.693696,54.9907031 C182.656304,54.7083105 182.691304,54.2370068 182.691304,54.047959 C183.746055,52.4612695 185.482007,51.2106348 186.660283,51.2106348 C187.778062,51.3249316 188.305317,52.2209521 188.111724,53.2033447 L185.768945,60.9430957 C185.738628,61.1203857 185.829683,61.2929932 185.990703,61.3536279 C186.160918,61.4119727 186.525034,61.1903516 186.816621,60.8707031 L188.223594,59.179082 C188.25873,59.4613037 188.195703,59.9583789 188.195703,60.149751 L188.195703,60.149751 Z M186.000068,41 C178.26729,41 172,47.2697168 172,55.0001025 C172,62.7303174 178.26729,69 186.000068,69 C193.732676,69 200,62.7280273 200,55.0001025 C199.999966,47.2697168 193.732676,41 186.000068,41 L186.000068,41 Z"
              id="Page-1-Copy-2"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  </div>
</template>
<script>
import icon from '../../icon'
import app from '../index.vue'
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
