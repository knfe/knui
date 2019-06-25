<template>
  <div id="kn-loading" :class="[index, className]" @click="closeShadow" :style="`background-color: ${shadowColor}`">
    <div class="loading-content" :style="`background-color: ${contentColor}`">
      <!-- circular-loading -->
      <div class="loading-circular" v-if="type === 'circular'">
        <div class="spinner-wrap cl-primary">
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
              <g transform="translate(-1405.000000, -1146.000000)" fill="#FFFFFF">
                  <g transform="translate(1405.000000, 1146.000000)">
                      <rect x="34" y="0" width="4" height="18" rx="2"></rect>
                      <rect fill-opacity="0.15" transform="translate(54.778175, 16.778175) rotate(45.000000) translate(-54.778175, -16.778175) " x="52.7781746" y="7.77817459" width="4" height="18" rx="2"></rect>
                      <rect fill-opacity="0.3" transform="translate(63.000000, 36.000000) rotate(90.000000) translate(-63.000000, -36.000000) " x="61" y="27" width="4" height="18" rx="2"></rect>
                      <rect fill-opacity="0.45" transform="translate(54.778175, 54.778175) rotate(135.000000) translate(-54.778175, -54.778175) " x="52.7781746" y="45.7781746" width="4" height="18" rx="2"></rect>
                      <rect fill-opacity="0.6" transform="translate(36.000000, 63.000000) rotate(180.000000) translate(-36.000000, -63.000000) " x="34" y="54" width="4" height="18" rx="2"></rect>
                      <rect fill-opacity="0.75" transform="translate(16.778175, 54.778175) rotate(225.000000) translate(-16.778175, -54.778175) " x="14.7781746" y="45.7781746" width="4" height="18" rx="2"></rect>
                      <rect fill-opacity="0.9" transform="translate(9.000000, 36.000000) rotate(270.000000) translate(-9.000000, -36.000000) " x="7" y="27" width="4" height="18" rx="2"></rect>
                      <rect transform="translate(16.778175, 16.778175) rotate(315.000000) translate(-16.778175, -16.778175) " x="14.7781746" y="7.77817459" width="4" height="18" rx="2"></rect>
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
@import './index.scss';

</style>
