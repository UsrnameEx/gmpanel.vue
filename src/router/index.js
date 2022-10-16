import { createRouter, createWebHistory } from 'vue-router'
import Main from "@/views/pages/Main/Main";
import PostPage from "@/views/pages/PostPage/PostPage";
import PostsPage from "@/views/pages/PostsPage/PostsPage";

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/posts',
    name: 'PostsPage',
    component: PostsPage
  },
  {
    path: '/posts/:id',
    name: 'PostPage',
    component: PostPage
  }
]

const router = createRouter({
  linkExactActiveClass: 'active',
  linkActiveClass: '',
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
