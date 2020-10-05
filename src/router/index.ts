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

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/employees',
    name: 'Employees',
    component: Employees
  },
  {
    path: '/employees/:id',
    name: 'EmployeesDiary',
    component: EmployeesDiary
  },
  {
    path: '/workplaces',
    name: 'Workplaces',
    component: Workplaces
  },
  {
    path: '/workplaces/:id',
    name: 'WorkplacesDiary',
    component: WorkplacesDiary
  },
  {
    path: '/clients',
    name: 'Clients',
    component: Clients
  },
  {
    path: '/notifications',
    name: 'Notifications',
    component: Notifications
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
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

export default router;
