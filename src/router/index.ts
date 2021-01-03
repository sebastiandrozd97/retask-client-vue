import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '@/views/Home/Home.vue';
import Employees from '@/views/Employees/Employees.vue';
import Clients from '@/views/Clients/Clients.vue';
import Workplaces from '@/views/Workplaces/Workplaces.vue';
import Settings from '@/views/Settings/Settings.vue';
import Notifications from '@/views/Notifications/Notifications.vue';
import EmployeesDiary from '@/views/EmployeesDiary/EmployeesDiary.vue';
import WorkplacesDiary from '@/views/WorkplacesDiary/WorkplacesDiary.vue';
import Auth from '@/views/Auth/Auth.vue';
import axios from 'axios';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/employees',
    name: 'Employees',
    component: Employees,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/employees/:id',
    name: 'EmployeesDiary',
    component: EmployeesDiary,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/workplaces',
    name: 'Workplaces',
    component: Workplaces,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/workplaces/:id',
    name: 'WorkplacesDiary',
    component: WorkplacesDiary,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/clients',
    name: 'Clients',
    component: Clients,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/notifications',
    name: 'Notifications',
    component: Notifications,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach(async (to, from, next) => {
  let isLoggedIn = false;
  const request = await axios.get(`${process.env.VUE_APP_API_URL}/users/current`, {
    headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` }
  });

  if (request.status === 200) {
    isLoggedIn = true;
  }

  if (to.matched.some(rec => rec.meta.requiresAuth)) {
    if (isLoggedIn) {
      next();
    } else {
      next({
        name: 'Auth'
      });
    }
  } else if (to.matched.some(rec => rec.path === '')) {
    if (isLoggedIn) {
      next({
        name: 'Home'
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
