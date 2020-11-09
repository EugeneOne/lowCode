import Vue from 'vue';
import App from './App.vue';
import router from './router';
import '@ss/mtd-vue-mobile/lib/styles/index.css';

import MTD from '@ss/mtd-vue-mobile';

Vue.use(MTD);

Vue.config.productionTip = false;

window._Vue = new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');

// window._Vue = new Vue({
//   el: '#app',
//   router,
//   template: '<App/>',
//   components: { App },
// });
