/* 
   Bismillahirrahmanirraheem
   Author: Dahir Muhammad Dahir
   Date: 19-December-2020 9:37 AM
   About: I will tell u later
*/

import { createWebHistory, createRouter } from 'vue-router';
import Races from '@/views/Races.vue';
import Home from '@/views/Home.vue';
import Register from '@/views/Register.vue';
import Login from '@/views/Login.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/races',
      name: 'races',
      component: Races
    },

    {
      path: '/',
      name: 'home',
      component: Home
    },

    {
      path: '/register',
      name: 'register',
      component: Register
    },

    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
});

export default router;
