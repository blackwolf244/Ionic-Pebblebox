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
    path: '/dashboard/:id',
    component: () => import ('../views/Dashboard.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
