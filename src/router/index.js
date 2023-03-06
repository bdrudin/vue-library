import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CodeConfirmationView from '../views/CodeConfirmationView.vue'
import DashboardView from '../views/DashboardView.vue'

import store from '../store'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        requiresNonAuth: true
      }
    },
    // Auth
    {
      path: '/login',
      name: 'login',
      component: () => import('../components/auth/LoginForm.vue'),
      meta: {
        requiresNonAuth: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/RegisterView.vue'),
      meta: {
        requiresNonAuth: true
      }
    },
    {
      path: '/otp/confirmation',
      name: 'confirmation',
      component: CodeConfirmationView,
      meta: {
        requiresAuth: true
      }
    },
    // Dashboard
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: DashboardView,
      meta: {
        requiresAuth: true
      }
    },
    // Borrows
    {
      path: '/borrows',
      name: 'Borrows',
      component: () => import('@/components/Borrows.vue'),
      meta: {
        requiresAuth: true
      }
    },
    // Books
    {
      path: '/books',
      name: 'Books',
      component: () => import('@/components/books/Books.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/books/add',
      name: 'AddBook',
      component: () => import('@/components/books/AddBook.vue'),
      meta: {
        requiresAuth: true
      }
    },
    // Categories
    {
      path: '/categories',
      name: 'Categories',
      component: () => import('@/components/categories/Categories.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/categories/add',
      name: 'AddCategory',
      component: () => import('@/components/categories/AddCategory.vue'),
      meta: {
        requiresAuth: true
      }
    },
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isAuthenticated) {
      next({
        name: 'login'
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresNonAuth)) {
    if (store.getters.isAuthenticated) {
      next({
        name: 'Dashboard'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
