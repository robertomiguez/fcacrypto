import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import Report from '../views/Report.vue'
import ViewExample from '../views/ViewExample.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/report',
    name: 'Report',
    component: Report
  },
  {
    path: '/',
    name: 'coingecko',
    component: Home,
    beforeEnter () {
      window.open('http://coingecko.com', '_blank')
    }
  },
  {
    path: '/example',
    name: 'ViewExample',
    component: ViewExample
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'Home' && !store.state.prices.length) {
    next({ name: 'Home' })
  } else {
    next()
  }
})

export default router
