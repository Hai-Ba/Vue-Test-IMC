import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import FeatureView from '../views/FeatureView.vue' 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      // name: 'home',
      component: FeatureView
    },
    {
      path: '/faq',
      // name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/FaqView.vue')
    },
    {
      path: '/upload',
      component: () => import('../views/UploadView.vue')
    },
    {
      path: '/api',
      component: () => import('../views/ApiView.vue')
    },
    {
      path: '/price',
      component: () => import('../views/PriceView.vue')
    },
    {
      path: '/pcaps',
      component: () => import('../views/ViewPcap.vue')
    },
    {
      path: '/signin',
      component: () => import('../views/SignIn.vue')
    },
  ]
})

export default router
