import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/kitapTeslim',
    name: 'kitapTeslim',
    component: () => import('../views/NewBookDeposit.vue')
  },
  {
    path: '/ogrenciler',
    name: 'ogrenciler',
    component: () => import('../views/Students.vue')
  }, 
  {
    path: '/ogrenciDuzenle/:id',
    name: 'ogrenciDuzenle',
    component: () => import('../views/UpdateStudent.vue')
  }, 
  {
    path: '/yeniOgrenci',
    name: 'yeniOgrenci',
    component: () => import('../views/NewStudent.vue')
  },  
  {
    path: '/kitaplar',
    name: 'kitaplar',
    component: () => import('../views/Books.vue')
  },
  {
    path: '/yeniKitap',
    name: 'yeniKitap',
    component: () => import('../views/NewBooks.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router