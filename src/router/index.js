import Vue from 'vue'
import VueRouter from 'vue-router'
import Sites from '../views/Sites.vue'
import Login from '../views/Login.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/sites',
    name: 'sites',
    component: Sites
  },
  {
    path: '/',
    name: 'login',
    component: Login
  }
]
const router = new VueRouter({
  routes
})

export default router
