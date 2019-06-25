
<template>
  <div class="list-wrapper">
      <h3>组件list - 开发模式</h3>
      <p><router-link :to="{ name: 'button'}">button组件</router-link></p>
      <p><router-link :to="{ name: 'cell'}">cell组件</router-link></p>
      <p><router-link :to="{ name: 'icon'}">icon组件</router-link></p>
      <p><router-link :to="{ name: 'loading'}">loading组件</router-link></p>
      <p><router-link :to="{ name: 'progress'}">progress组件</router-link></p>
      <p><router-link :to="{ name: 'pullRefresh'}">pullRefresh组件</router-link></p>
      <p><router-link :to="{ name: 'radio'}">radio组件</router-link></p>
      <p><router-link :to="{ name: 'message'}">message组件</router-link></p>
      <p><router-link :to="{ name: 'toast'}">toast组件</router-link></p>
  </div>
</template>

<script>
/* eslint-disable */
// import Vue from 'vue'
export default {
  name: 'list',
  data() {
    return {};
  },
  methods: {}
};
</script>
