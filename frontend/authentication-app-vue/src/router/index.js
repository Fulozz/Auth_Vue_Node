import { createRouter, createWebHistory } from 'vue-router'

//==> importacoes das paginas




const routes = [
  {
    path: '/',
    name: 'login',
    component: ()=> import("@/components/authComponents/login/LoginComponent")
  },
  {
    path: '/home',
    name: 'home',
    component: ()=> import("@/components/authComponents/home/HomeComponent")
  },
  {
    path: '/register',
    name: 'register',
    component: ()=> import("@/components/authComponents/register/RegisterComponent")
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router
