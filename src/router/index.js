import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostDetailView from '../views/PostDetailView.vue'
import TagsView from '../views/TagsView.vue'
import CreateView from '../views/CreatePostView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/posts/detail/:id', 
    name: 'post-detail',
    component: PostDetailView,
    props: true
  },
  {
    path: '/tags/:tag',
    name: 'tags',
    component: TagsView,
    props: true
  },
  {
    path: '/create-post',
    name: 'create-post',
    component: CreateView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
  // scrollBehavior(to, from, savedPosition) {
  //   return { top: 0 }
  // },
  
})

export default router
