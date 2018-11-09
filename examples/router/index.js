import Vue from 'vue'
import VueRouter from 'vue-router'
import doc from './doc'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [...doc]
})

export default router
