import Vue from 'vue';
import VueRouter from 'vue-router';
import Edit from '../views/edit/edit.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/edit',
  },
  {
    path: '/edit',
    name: 'EditLayout',
    component: Edit,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
