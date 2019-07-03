import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

require("./assets/main.scss")

Vue.config.productionTip = false

var app = '';

app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')