// Composables
import {createRouter, createWebHistory} from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Books',
        component: () => import(/* webpackChunkName: "home" */ '@/views/ListBooks.vue'),
      },
      {
        path: '/authors',
        name: 'Authors',
        component: () => import(/* webpackChunkName: "home" */ '@/views/ListAuthors.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
