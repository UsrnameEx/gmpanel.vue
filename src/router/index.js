import { createRouter, createWebHistory } from 'vue-router'
import Main from "@/views/pages/Main/Main";

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  }
]

const router = createRouter({
  linkExactActiveClass: 'active',
  linkActiveClass: '',
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
