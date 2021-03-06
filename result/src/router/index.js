import { createRouter, createWebHistory } from 'vue-router'

import Catalog from '../views/Catalog'
import Home from '../views/Home'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: Catalog
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
