import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import About from '../views/About.vue';
import Login from '../views/Login.vue';
import Dashboard from '../views/Dashboard.vue';
import Settings from '../views/Settings.vue';
import NotFound from '../views/NotFound.vue';
import Info from '../views/Info.vue';
import Application from '../views/Application.vue'

const routes: Array<RouteRecordRaw> = [
  
  {
    path: '/',
    name: 'Dashbaord',
    // name: 'Info',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Info
  },
  {
    path: '/app',
    name: 'Application',
    component: Application,
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard,
      },
      // {
      //   path: '/login',
      //   name: 'Login',
      //   component: Login,
      // },
      {
        path: '/settings',
        name: 'Settings',
        component: Settings,
      },
    ]
  },

  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
