import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Member from '@/components/VueMember'
import Toast from "vue-toast-plugin"

Vue.use(Router)
Vue.use(Toast)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/member',
      name: 'Member',
      component: Member
    }
  ]
})
