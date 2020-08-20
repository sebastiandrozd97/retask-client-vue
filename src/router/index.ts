import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '@/views/Home/Home.vue';
import Employees from '@/views/Employees/Employees.vue';
import EmployeesDiary from '@/views/EmployeesDiary/EmployeesDiary.vue';

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
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
