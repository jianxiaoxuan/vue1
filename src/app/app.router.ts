import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Index from './components/index.vue';
import About from './components/about.vue';
import postRoutes from '@/post/post.routers';

/**
 * 定义路由
 */
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Index,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/about-us',
    redirect: to => {
      console.log(to);
      return '/about';
    },
  },
  ...postRoutes,
];

/**
 * 创建路由器
 */
const router = createRouter({
  history: createWebHistory(),
  routes,
});

/**
 * 导航守卫
 */
// router.beforeEach((to, from, next) => {
//   console.log('👮');
//   console.log('to', to);
//   console.log('from', from);
//   next();
// });

export default router;