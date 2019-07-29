<template>
  <div id="kn-loading" :class="[index, className]" @click="closeShadow" :style="`background-color: ${shadowColor}`">
    <div class="loading-content" :style="`background-color: ${contentColor}`">
      <!-- circular-loading -->
      <div class="loading-circular" v-if="type === 'circular'">
        <div class="spinner-wrap kn-ft-primary">
          <div class="spinner">
            <div class="circle-clipper left">
              <div class="circle"></div>
            </div>
            <div class="gap-patch">
              <div class="circle"></div>
            </div>
            <div class="circle-clipper right">
              <div class="circle"></div>
            </div>
          </div>
        </div>
        <p class="hint">{{hint}}</p>
      </div>
      <!-- bubble-loading -->
      <div class="loading-bubble" v-else-if="type === 'bubble'">
        <i></i>
        <i class="layui-m-layerload"></i>
        <i></i>
        <p class="hint">{{hint}}</p>
      </div>
      <!-- spinner-loading -->
      <div class="loading-spinner" v-else-if="type === 'spinner'">
        <div class="loading-img">
          <svg width="72px" height="72px" viewBox="0 0 72 72" version="1.1">
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g transform="translate(-1405.000000, -1149.000000)" fill="#FFFFFF">
                    <g transform="translate(1405.000000, 1149.000000)">
                        <rect class="change1" id="矩形" x="34" y="0" width="4" height="18" rx="2"></rect>
                        <rect class="change2" id="矩形" fill-opacity="0.15" transform="translate(55.091883, 16.908117) rotate(45.000000) translate(-55.091883, -16.908117) " x="53.0918831" y="7.90811691" width="4" height="18" rx="2"></rect>
                        <rect class="change3" id="矩形" fill-opacity="0.3" transform="translate(63.000000, 36.000000) rotate(90.000000) translate(-63.000000, -36.000000) " x="61" y="27" width="4" height="18" rx="2"></rect>
                        <rect class="change4" id="矩形" fill-opacity="0.45" transform="translate(55.091883, 55.091883) rotate(135.000000) translate(-55.091883, -55.091883) " x="53.0918831" y="46.0918831" width="4" height="18" rx="2"></rect>
                        <rect class="change5" id="矩形" fill-opacity="0.6" transform="translate(36.000000, 63.000000) rotate(180.000000) translate(-36.000000, -63.000000) " x="34" y="54" width="4" height="18" rx="2"></rect>
                        <rect class="change6" id="矩形" fill-opacity="0.75" transform="translate(16.908117, 55.091883) rotate(225.000000) translate(-16.908117, -55.091883) " x="14.9081169" y="46.0918831" width="4" height="18" rx="2"></rect>
                        <rect class="change7" id="矩形" fill-opacity="0.9" transform="translate(9.000000, 36.000000) rotate(270.000000) translate(-9.000000, -36.000000) " x="7" y="27" width="4" height="18" rx="2"></rect>
                        <rect class="change8" id="矩形" transform="translate(16.908117, 16.908117) rotate(315.000000) translate(-16.908117, -16.908117) " x="14.9081169" y="7.90811691" width="4" height="18" rx="2"></rect>
                    </g>
                </g>
            </g>
          </svg>
        </div>
        <p class="hint">{{hint}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'kn-loading'
}
</script>
<style lang="scss">
@import './main.scss';

</style>
