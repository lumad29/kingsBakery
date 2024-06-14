// Composables
import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '@/pages/AboutView.vue'
import HomeView from '@/pages/HomeView.vue'
import ProductsView from '@/pages/ProductsView.vue';
import WorkView from "@/pages/WorkView";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/products',
      name: 'products',
      component: ProductsView
    },
    {
      path: '/work',
      name: 'work',
      component: WorkView
    },
  ]
})

export default router