import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Sign_in from "../components/sign_in.vue";
import Course_intro from "../courses/course_intro.vue";
import Register from "../components/register.vue";
import chatgpt from "../components/chatgpt.vue";
import intro from "../music/intro";
import axios from "axios";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Sign_in",
    component: Sign_in,
  },
  {
    path: "/chatgpt",
    name: "chatgpt",
    component: chatgpt,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/forget_password",
    name: "Forget_password",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(
        /* webpackChunkName: "about" */ "../components/forget_password.vue"
      );
    },
  },
  {
    path: "/why-us",
    name: "Why_crypto",
    component: function () {
      return import(/* webpackChunkName: "about" */ "../components/why-us.vue");
    },
  },
  {
    path: "/blog",
    name: "Blog",
    component: function () {
      return import(/* webpackChunkName: "about" */ "../components/blog.vue");
    },
  },
  {
    path: "/samples",
    name: "Design_samples",
    component: function () {
      return import(
        /* webpackChunkName: "about" */ "../components/design_samples.vue"
      );
    },
  },
  {
    path: "/admin/dashboard",
    name: "Admin",
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/admin.vue");
    },
    children: [
      {
        path: "/admin/dashboard",
        name: "AdminDashboard",
        component: function () {
          return import(
            /* webpackChunkName: "about" */ "../views/adminDashboard.vue"
          );
        },
      },
      {
        path: "/admin/blog",
        name: "adminBlog",
        component: function () {
          return import(
            /* webpackChunkName: "about" */ "../views/adminBlog.vue"
          );
        },
      },
      {
        path: "/admin/guide",
        name: "AdminGuide",
        component: function () {
          return import(
            /* webpackChunkName: "about" */ "../views/adminGuide.vue"
          );
        },
      },
      {
        path: "/admin/email",
        name: "AdminEmail",
        component: function () {
          return import(
            /* webpackChunkName: "about" */ "../views/adminEmail.vue"
          );
        },
      },
      {
        path: "/admin/analytics",
        name: "Analytics",
        component: function () {
          return import(
            /* webpackChunkName: "about" */ "../views/adminAnalytics.vue"
          );
        },
      },
      {
        path: "/admin/feedback",
        name: "adminFeedback",
        component: function () {
          return import(
            /* webpackChunkName: "about" */ "../views/adminFeedback.vue"
          );
        },
      },
      {
        path: "/admin/dashboard/course/:course",
        name: "AdminCourse",
        component: function () {
          return import(
            /* webpackChunkName: "about" */ "../views/adminCourse.vue"
          );
        },
      },
      {
        path: "/admin/course/courses/view",
        name: "AdminCourseView",
        component: function () {
          return import(
            /* webpackChunkName: "about" */ "../views/adminCourseView.vue"
          );
        },
      },
    ],
  },
  {
    path: "/course",
    name: "course_intro",
    component: Course_intro,
    beforeEnter(to, from, next) {
      axios("api/token")
        .then((res) => {
          if (res.statusText === "OK") {
            next();
          } else {
            next("/login");
          }
        })
        .catch((err) => {
          next("/login");
        });
    },
    children: [
      {
        path: "/course",
        name: "CourseHome",
        component: function () {
          return import(
            /* webpackChunkName: "about" */ "../courses/courseHome.vue"
          );
        },
      },
      {
        path: "/course/user/profile",
        name: "Course_user",
        component: function () {
          return import(
            /* webpackChunkName: "about" */ "../courses/course_user.vue"
          );
        },
      },
      {
        path: "/course/user/help",
        name: "CourseHelp",
        component: function () {
          return import(
            /* webpackChunkName: "about" */ "../courses/courseHelp.vue"
          );
        },
      },
      {
        path: "/course/user/setting%20privacy",
        name: "CourseSetting",
        component: function () {
          return import(
            /* webpackChunkName: "about" */ "../courses/courseSetting.vue"
          );
        },
      },
      {
        path: "/course/:course",
        name: "Course",
        component: function () {
          return import(
            /* webpackChunkName: "about" */ "../courses/course.vue"
          );
        },
      },
    ],
  },
  {
    path: "/music/piano",
    name: "Music",
    component: intro,
    beforeEnter(to, from, next) {
      axios("api/token")
        .then((res) => {
          if (res.statusText === "OK") {
            next();
          } else {
            next("/login");
          }
        })
        .catch((err) => {
          next("/login");
        });
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
