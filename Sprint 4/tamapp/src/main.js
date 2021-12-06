import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueFormulate from '@braid/vue-formulate'
import { es} from '@braid/vue-formulate-i18n'

Vue.use(VueFormulate, {
  plugins: [ es ],
  locale: 'es'
})
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
