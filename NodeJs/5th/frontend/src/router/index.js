import Vue from 'vue'
import Router from 'vue-router'

import { 
  HelloWorld,
  Posts,
  Users,
  PostDetail,
  PostEdit,
  UserDetail,
  PostNew
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
      path: '/posts/:id',
      name: 'PostDetail',
      component: PostDetail
    },

    {
      path: '/users',
      name: 'Users',
      component: Users
    },
    
    {
      path: '/users/:id',
      name: 'UserDetail',
      component: UserDetail
    },
    
    {
      path: '/edit/:id',
      name: 'PostEdit',
      component: PostEdit
    },
    
    {
      path: '/new',
      name: 'PostNew',
      component: PostNew
    }

  ]
})
