import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Login from '@/views/Login.vue';
import Regsiter from '@/views/Register.vue';
import ResetPassword from '@/views/ResetPassword.vue';
import { auth } from '@/firebase';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: 'Home Page',
      requiresAuth: true,
    }
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: {
      title: 'About Us',
      requiresAuth: true,
    }
  },
  {
    path: '/Login',
    name: 'login',
    component: Login,
    meta: {
      title: 'Login',
    }
  },
  {
    path: '/register',
    name: 'register',
    component: Regsiter,
    meta: {
      title: 'Register',
    }
  },
  {
    path: '/reset-password',
    name: 'reset-password',
    component: ResetPassword,
    meta: {
      title: 'Reset Password',
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Authentication`;
  if (to.path === '/login' && auth.currentUser) {
    next('/');
    return;
  }
  if (to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser) {
    next('/login');
    return;
  }
  next(); 
})

export default router
