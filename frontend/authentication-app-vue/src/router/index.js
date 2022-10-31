import { createRouter, createWebHistory } from 'vue-router';

//= => importacoes das paginas

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('@/components/authComponents/login/LoginComponent.vue'),
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/components/authComponents/home/HomeComponent.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/components/authComponents/register/RegisterComponent.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
