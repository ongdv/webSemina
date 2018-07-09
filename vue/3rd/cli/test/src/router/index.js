import Vue from 'vue'
import Router from 'vue-router'
import example3 from '@/components/example3'
import count from '@/components/count'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'example3',
      component: example3
    }
  ]
})
