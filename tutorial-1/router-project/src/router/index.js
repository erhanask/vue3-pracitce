import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import NotFound from '../views/NotFound.vue'
import JobsView from "@/views/jobs/JobsView";
import JobsDeatilView from "@/views/jobs/JobsDeatilView";
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: JobsView
  },
  {
    path: '/job-detail/:id',
    name: 'jobDetail',
    component: JobsDeatilView,
    props: true
  },
    //redirect
  {
    path: '/all-jobs',
    redirect: '/jobs',
  },
    //catchall 404
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

export default router
