import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '@/store/auth'; 
import LoginView from '../views/LoginView.vue';
import App from '../components/app/App.vue';

// Route-lar
const routes = [
  {
    path: '/',
    name: 'home',
    component: App,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  // {
  //   path: '/protected',
  //   name: 'protected',
  //   meta: { requiresAuth: true }, // Auth talab qilinadigan sahifa
  //   component: () => import('@/views/ProtectedPage.vue'),
  // }
];

// Router yaratish
const router = createRouter({
  history: createWebHistory(),
  routes
});

// Router guard orqali auth-ni tekshirish
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next('/login'); // Authentifikatsiya talab qilingan sahifa uchun login sahifasiga yo'naltirish
  } else {
    next(); // Agar auth talab qilinmasa yoki auth bo'lsa, yo'l davom etsin
  }
});

export default router;
