import { createRouter, createWebHistory } from 'vue-router'
import { routes, routeComponents } from './routes'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/transcripts'
    },
    ...routes.map(route => ({
      path: route.path,
      name: route.name,
      component: routeComponents[route.name as keyof typeof routeComponents]
    }))
  ]
})

export default router