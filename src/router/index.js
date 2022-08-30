import { getAuth } from 'firebase/auth'
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
        requiresAuth: false
      },
      component: () => import('../components/inn/Registration.vue')
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


// chec for auth state changes
// onAuthStateChanged(user => {
//   if (user) {
//     router.push('/table')
//   } else {
//     router.push('/login')
//   }
// })
// rout guard
// router.beforeEach((to, from, next) => {
//   const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
//   const isAuthenticated = getAuth().currentUser
//   if (requiresAuth && !isAuthenticated) {
//     next('/login')
//   } else {
//     next()
//   }
// })

export default router
