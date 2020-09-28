import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '@/views/Home/Home.vue';
import Employees from '@/views/Employees/Employees.vue';
import Workplaces from '@/views/Workplaces/Workplaces.vue';
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
