import Vue from 'vue';
import VueRouter from 'vue-router';
import firebase from 'firebase';

// components
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import DashboardView from '../components/home/Dashboard.vue';
import TasksView from '../components/home/Tasks.vue';
import CalendarView from '../components/home/Calendar.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      meta: { requiresAuth: true },
      redirect: '/home'
    },
    {
      path: '/home',
      component: HomeView,
      meta: { requiresAuth: true },
      children: [
        {
          path: '/home/dashboard',
          component: DashboardView,
          meta: { requiresAuth: true }
        },
        {
          path: '/home/tasks',
          component: TasksView,
          meta: { requiresAuth: true }
        },
        {
          path: '/home/calendar',
          component: CalendarView,
          meta: { requiresAuth: true }
        }
      ]
    },
    { path: '/login', component: LoginView, meta: { requiresGuest: true } },
    {
      path: '/register',
      component: RegisterView,
      meta: { requiresGuest: true }
    }
  ]
});

const app = new Vue({
  router
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
