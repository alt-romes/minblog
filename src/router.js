import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'

import app from './App.vue'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "about" */ './views/Login.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('./views/Dashboard.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/edit',
      name: 'edit',
      component: () => import('./views/Edit.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/edit/:id',
      name: 'edit post',
      component: () => import('./views/Edit.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('./views/Settings.vue'),
      meta: {
        requiresAuth: true
      }
    },
  ]
})

router.beforeEach((to, from, next) => {
  const isLoggedIn = app.methods.isLoggedIn();
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  
  if(requiresAuth && !isLoggedIn) {
    next('login');
  } else {
    next();
  }
});

export default router;