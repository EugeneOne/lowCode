import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import '@ss/mtd-vue/lib/theme2/index.css'

import MTD from '@ss/mtd-vue'

Vue.use(MTD)

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
