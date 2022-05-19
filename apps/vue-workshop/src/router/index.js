import Vue from 'vue';
import VueRouter from 'vue-router';
// import HomeView from '../views/HomeView.vue';
import routes from './routes.js';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
