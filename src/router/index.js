import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
import Home from '../components/Home.vue'
import Sign_in from '../components/sign_in.vue'

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
    component: Sign_in
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
  }, {
    path: '/admin/blog',
    name: 'Admin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import( /* webpackChunkName: "about" */ '../views/admin.vue')
    },
    children: [{
      path: '/admin/blog',
      name: 'adminBlog',
      component: function () {
        return import( /* webpackChunkName: "about" */ '../views/adminBlog.vue')
      }
    }, {
      path: '/admin/closed',
      name: 'adminEmpty',
      component: function () {
        return import( /* webpackChunkName: "about" */ '../views/adminEmpty.vue')
      }
    }]
  },
  {
    path: '/course',
    name: 'course_intro',
    component: function () {
      return import( /* webpackChunkName: "about" */ '../courses/course_intro.vue')
    },
    children: [{
      path: '/course/crypto',
      name: 'crypto_course',
      component: function () {
        return import( /* webpackChunkName: "about" */ '../courses/crypto_course.vue')
      }
    }, {
      path: '/course/forex',
      name: 'forex_corex',
      component: function () {
        return import( /* webpackChunkName: "about" */ '../courses/forex_course.vue')
      }
    }, {
      path: '/course/graphic',
      name: 'graphic_course',
      component: function () {
        return import( /* webpackChunkName: "about" */ '../courses/graphic_course.vue')
      }
    }, {
      path: '/course/web',
      name: 'web_course',
      component: function () {
        return import( /* webpackChunkName: "about" */ '../courses/web_course.vue')
      }
    }]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router