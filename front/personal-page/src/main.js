import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import FlagIcon from 'vue-flag-icon';
import i18n from './plugins/i18n'
import router from '../src/router/index'

Vue.use(FlagIcon);
Vue.config.productionTip = false

new Vue({
  vuetify,
  i18n,
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
