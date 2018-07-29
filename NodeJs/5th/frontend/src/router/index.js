import Vue from 'vue'
import Router from 'vue-router'

import { 
  HelloWorld,
  Posts,
  Users
} from '@/components/containers'

Vue.use(Router)

export default new Router({
  routes: [
    
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    
    {
      path: '/posts',
      name: 'Posts',
      component: Posts
    },
    
    {
      path: '/users',
      name: 'Users',
      component: Users
    },
    


  ]
})
