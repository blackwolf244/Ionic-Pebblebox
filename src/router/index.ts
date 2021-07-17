import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/dashboard/thd'
  },
  {
    path: '/contact',
    component: () => import ('../views/Contact.vue')
  },
  {
    path: '/pebble',
    component: () => import ('../views/Pebble.vue')
  },
  {
    path: '/dashboard/thd',
    component: () => import ('../views/THDFavourites.vue')
  },
  {
    path: '/dashboard/pond',
    component: () => import ('../views/PebblePond.vue')
  },
  {
    path: '/dashboard/social',
    component: () => import ('../views/SocialMedia.vue')
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    redirect: '/'
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
