import { createRouter, createWebHistory } from 'vue-router'

import Catalog from '../views/Catalog'
import Home from '../views/Home'
import OrderConfirmation from '../views/OrderConfirmation'
import Checkout from '../views/Checkout'

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
  },
  {
    path: '/order/:id',
    name: 'OrderConfirmation',
    component: OrderConfirmation,
    props: true

  },
  {
    path: '/checkout/:checkoutId',
    name: 'Checkout',
    component: Checkout,
    props: true
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
