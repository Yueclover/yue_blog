import { createRouter,createWebHistory } from "vue-router";

const router = createRouter({
  history:createWebHistory(),
  routes:[
    {
      path: '/',
      redirect: '/home',
    },
    // 用于测试
    {
      path: '/test',
      name: 'test',
      component: () => import('../views/Test/TestIndex.vue'),
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Account/LoginIndex.vue'),
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Account/RegisterIndex.vue'),
      meta: {
        requiresAuth: true,
      },
    },
    // 用于展示统计数据
    {
      path:'/home',
      name:'home',
      component:()=>import('../views/Home/HomeIndex.vue'),
      meta:{
        requireAuth:true,
      }
    },
    // 
    {
      path: '/blog/blogEdit/:bn?/:bid?',
      name: 'blogEdit',
      component: () => import('../views/Blog/BlogEdit.vue'),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/blog/blogView',
      name: 'blogView',
      component: () => import('../views/Blog/BlogView.vue'),
      meta: {
        requiresAuth: true,
      },
    },
    
    
  ]
})

export default router
