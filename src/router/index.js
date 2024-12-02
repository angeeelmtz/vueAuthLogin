import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthView from '@/views/AuthView.vue'
import AuthFireBase from '@/views/AuthFireBase.vue'
import AuthSocial from '@/views/AuthSocial.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/auth',
    name: 'auth',
    component: AuthView
  },
  {
    path: '/firebase',
    name: 'firebase',
    component: AuthFireBase
  },
  {
    path: '/social',
    name: 'social',
    component: AuthSocial
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
