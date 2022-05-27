import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Home from '../components/Home.vue'
import Sign_in from '../components/sign_in.vue'
import Course_intro from '../courses/course_intro'
import intro from '../music/intro'
import axios from 'axios'

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
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
    path: '/samples',
    name: 'Design_samples',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import( /* webpackChunkName: "about" */ '../components/design_samples.vue')
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
      path: '/admin/email',
      name: 'AdminEmail',
      component: function () {
        return import( /* webpackChunkName: "about" */ '../views/adminEmail.vue')
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
    component: Course_intro,
    beforeEnter(to, from, next) {
      axios('api/token').then(res => {
        if (res.statusText === 'OK') {
          next()
        } else {
          next('/login')
        }
      }).catch(err => {
        next('/login')
      })
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
  }, {
    path: '/music/piano',
    name: "Music",
    component: intro,
    beforeEnter(to, from, next) {
      axios('api/token').then(res => {
        if (res.statusText === 'OK') {
          next()
        } else {
          next('/login')
        }
      }).catch(err => {
        next('/login')
      })
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router