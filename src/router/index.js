import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProdukView from '../views/ProdukView.vue'
import CarInfo from '../components/cars/CarInfo.vue'
import BerandaView from '../views/BerandaView.vue'
import PrivacyView from '../views/PrivacyView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/cars/:carName/:carField',
    name: 'carInfo',
    component: CarInfo
  },
  {
    path: '/beranda',
    name: 'Beranda',
    component: BerandaView
  },
  {
    path: '/produk',
    name: 'Produk',
    component: ProdukView
  },
  {
    path: '/kebijakan-privasi',
    name: 'Privacy',
    component: PrivacyView
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

  let documentTitle = `${appTitle}`

  if (to.params.pageTitle) {
    documentTitle += ` | ${to.params.pageTitle}`
  }

  document.title = documentTitle
  next()
})

export default router
