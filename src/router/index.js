import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/HomeView.vue';
import About from '@/views/AboutView.vue';
import Manage from '@/views/Manage.vue';
import Song from '@/views/Song.vue';
import store from '@/store';

const routes = [
  {
    name: 'home',
    path: '/', // examples.com/
    component: Home,
  },
  {
    name: 'about',
    path: '/about', // examples.com/about
    component: About,
  },
  {
    name: 'manage',
    // alias: '/manage',
    path: '/manage-music', // examples.com/manage-music
    meta: {
      requiresAuth: true,
    },
    component: Manage,
    beforeEnter: (to, from, next) => {
      console.log('Manage Route Guard');
      next();
    },
  },
  {
    path: '/manage',
    redirect: { name: 'manage' },
  },
  {
    name: 'song',
    path: '/song/:id',
    component: Song,
  },
  {
    path: '/:catchAll(.*)*',
    redirect: { name: 'home' },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass: 'text-amber-500',
});

router.beforeEach((to, from, next) => {
  // console.log(to.matched);

  if (!to.matched.some((records) => records.meta.requiresAuth)) {
    next();
    return;
  }

  if (store.state.userLoggedIn) {
    next();
  } else {
    next({ name: 'home' });
  }
});

export default router;
