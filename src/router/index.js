import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Idea from '../views/Idea.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About 
  },
  {
    path: '/Idea',
    name: 'Idea',
    component: Idea
  }
]

const router = new VueRouter({
  routes
})

export default router
