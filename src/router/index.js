import Vue from 'vue';
import VueRouter from 'vue-router';
import firebase from 'firebase';

const routerOptions = [
  { path: '/', component: 'HomeView', meta: { requiresAuth: true } },
  { path: '/login', component: 'LoginView', meta: { requiresGuest: true } },
  {
    path: '/register',
    component: 'RegisterView',
    meta: { requiresGuest: true }
  },
  {
    path: '/finishSignUp',
    component: 'FinishSignUpView',
    meta: {
      requiresAuth: true
    }
  }
];

const routes = routerOptions.map(route => {
  return {
    ...route,
    component: () => import(`@/views/${route.component}.vue`)
  };
});

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = firebase.auth().currentUser;

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    if (isAuthenticated) {
      next({
        path: '/',
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
