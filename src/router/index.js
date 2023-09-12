import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import CarInfo from '../components/cars/CarInfo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/cars/:carName/:carField',
    name: 'carInfo',
    component: CarInfo
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/categories',
    name: 'Categories',
    component: () => import('../views/CategoriesView.vue')
  },
  {
    path: '/:catchAll(.*)',
    name: 'errorPage',
    component: () => import('../components/errorPage/ErrorPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  const appTitle = process.env.VUE_APP_TITLE || ''

  let documentTitle = `${appTitle} | ${to.name}`

  if (to.params.pageTitle) {
    documentTitle += ` | ${to.params.pageTitle}`
  }

  document.title = documentTitle
  next()
})

export default router
