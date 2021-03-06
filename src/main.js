import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import VModal from 'vue-js-modal'
import { routes } from './routes';

import './assets/ajax/libs/jquery/3.2.1/jquery.min.js';
// import './assets/js/plugins.js';
import './assets/js/main.js';

// Zurb Foundation 6
// import './../node_modules/foundation-sites/dist/css/foundation.min.css';
import './../node_modules/foundation-sites/dist/js/foundation.min.js';
import './assets/css/foundation.css';
import './assets/css/foundation-motion-ui.css';

//  Material Design Iconic Fonts + Ícones RentHire + Ícones Customizados DriveMe
import './assets/css/material-design-iconic-font.css';
import './assets/css/renthire-icons.css';
import './assets/css/driveme.css';

// import './assets/css/plugins.css';

import './assets/css/lightgallery.css'
import './assets/js/lightgallery-all'

// CSS Principal
import './assets/css/style.css';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VModal)

Vue.http.options.root = "http://localhost:8081/DriveMe/api/v1/";

const router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.use(VueResource);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
