import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeComponent from '../components/auth-components/home/HomeComponent.vue';
import LoginComponent from '../components/auth-components/login/LoginComponent.vue';
import RegisterComponent from '../components/auth-components/register/RegisterComponent.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeComponent,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginComponent,
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterComponent,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
