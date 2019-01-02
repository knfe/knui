/**
 * 组件目录结构模板字符串
 */

module.exports = [
  // component demo
  {
    tpl: data => `
      <template>
        <div class="${data.demo.namespace}">
          <app></app>
        </div>
      </template>
      <script>
      import app from '../index.vue'
      export default {
        name: '${data.demo.namespace}',
        data() {
          return {
            msg: '${data.demo.namespace}'
          }
        },
        components: {
          app
        }
      }
      </script>
      <style lang="scss">
      .${data.demo.namespace} {
      }
      </style>
    `,
    output: 'demo/index.vue'
  },
  // component demo entry
  {
    tpl: data => `
      /**
       * ${data.demo.namespace} component demo entry
       */

      import Vue from 'vue'
      import app from './index.vue'

      new Vue({
        render: h => h(app)
      }).$mount('#app')
    `,
    output: 'demo/index.js'
  },
  // component
  {
    tpl: data => `
      <template>
        <div class="${data.namespace}">{{msg}}</div>
      </template>
      <script>
      export default {
        name: '${data.namespace}',
        data() {
          return {
            msg: 'hello ${data.namespace}'
          }
        }
      }
      </script>
    `,
    output: 'index.vue'
  },
  // component style
  {
    tpl: data => `
      /**
       * ${data.namespace} component style
       */
      
      .${data.namespace} {
      }    
    `,
    output: 'index.scss'
  },
  // readme zh-CN
  {
    tpl: data => `
      <!-- 简体中文 -->

      # ${data.namespace}
    `,
    output: 'zh-CN.md'
  },
  // readme en-US
  {
    tpl: data => `
      <!-- English -->

      # ${data.namespace}
    `,
    output: 'en-US.md'
  },
  // test
  {
    tpl: data => `
    // Wirte test case in this file
    // import { shallowMount } from '@vue/test-utils'
    // import ${data.demo.namespace} from '..'
    `,
    output: 'test/index.spec.js'
  }
]
