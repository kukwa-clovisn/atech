import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
import Home from '../components/Home.vue'

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signup',
    name: 'Sign_up',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import( /* webpackChunkName: "about" */ '../components/sign_up.vue')
    }
  }, {
    path: '/login',
    name: 'Sign_in',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import( /* webpackChunkName: "about" */ '../components/sign_in.vue')
    }
  }, {
    path: '/forget_password',
    name: 'Forget_password',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import( /* webpackChunkName: "about" */ '../components/forget_password.vue')
    }
  }, {
    path: '/why-us',
    name: 'Why_crypto',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import( /* webpackChunkName: "about" */ '../components/why-us.vue')
    }
  }, {
    path: '/blog',
    name: 'Blog',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import( /* webpackChunkName: "about" */ '../components/blog.vue')
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router