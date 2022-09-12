import {getAuth, onAuthStateChanged} from "firebase/auth";
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/tableview',
      name: 'table',
      meta: {
        requiresAuth: true
      },
      component: () => import('../views/TableView.vue')
    },
    {
      path: '/register',
      name: 'signup',
      meta: {
        requiresAuth: true
      },
      component: () => import('../components/inn/Registration.vue')
    },
    {
      path: '/students',
      name: 'students',
      meta: {
        requiresAuth: true
      },
      component: () => import('../views/StudentDetailsPage.vue')
    },
    {
      path: '/addfile',
      name: 'add-file',
      meta: {
        requiresAuth: true
      },
      component: () => import('../views/AddFileView.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      meta: {
        requiresAuth: true
      },
      component: () => import('../views/admin/AdminView.vue'),
      children: [
        {
          path: '',
          name: 'dashboard',
         
          component: () => import('../views/admin/Dashboard.vue')
        },
        {
          path: '',
          name: 'recentActivity',
         
          component: () => import('../views/admin/RecentActivity.vue')
        },
        {
          path: '',
          name: 'users',
         
          component: () => import('../views/admin/Users.vue')
        },
        {
          path: '',
          name: 'admins',
         
          component: () => import('../views/admin/Admins.vue')
        },
        {
          path: '',
          name: 'getreports',
         
          component: () => import('../views/admin/GetReports.vue')
        },
      ]
    },
    {
      path: '/landing',
      name: 'landing',
      // meta: {
      //   requiresAuth: false
      // },
      component: () => import('../views/LandingPage.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../components/inn/Login.vue')
    },
    {
      path: '/forgot-password',
      name: 'forgot-password',
      component: () => import('../components/inn/ForgotPassword.vue')
    }
  ]
})

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
      const removeListener = onAuthStateChanged(
          getAuth(),
          (user) => {
              removeListener();
              resolve(user);
          },
          reject,
      )
  });
}


router.beforeEach(async (to, from, next) => {
  //  check if auth is required
      if (to.matched.some(record => record.meta.requiresAuth)) {
          if (await getCurrentUser()) {
              next();
          } else {
              next("/",);
          }
  
      } else {
          next();
      }
  })

export default router
