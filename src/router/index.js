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
        component: () => import(/* webpackChunkName: "home" */ '@/views/Books/index.vue'),
      },
      {
        path: '/books/:id',
        name: 'Books-id',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Books/id/index.vue'),
      },
      {
        path: '/authors',
        name: 'Authors',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Authors.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
