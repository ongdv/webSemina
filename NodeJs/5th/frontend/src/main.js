// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

// Bootstrap
import Bootstrap from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


import { Navbar } from 'bootstrap-vue/es/components';
import { Button } from 'bootstrap-vue/es/components';


axios.defaults.withCredentials=true;
axios.defaults.baseURL = process.env.BACKEND_URL;

Vue.use(axios);
Vue.use(Navbar);
Vue.use(Button);

Vue.use(Bootstrap)
Vue.config.productionTip = false
Vue.prototype.$http = axios



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  components: { App },
  template: '<App/>'

})
