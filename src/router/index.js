// Composables
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/pages/HomeView.vue'
import PastriesView from '@/pages/PastriesView.vue'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/pastries',
      name: 'pastries',
      component: PastriesView
    }
  ]
})

export default router
