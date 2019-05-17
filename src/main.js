import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import firebase from 'firebase/app'
import 'firebase/auth'

require("./assets/main.scss")

//Firebase
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCgxQ9X0Ujz4v6ZgEHb9NfbieW4-ZCMUF8",
  authDomain: "minblog-f915f.firebaseapp.com",
  databaseURL: "https://minblog-f915f.firebaseio.com",
  projectId: "minblog-f915f",
  storageBucket: "minblog-f915f.appspot.com",
  messagingSenderId: "478467734852",
  appId: "1:478467734852:web:bf923a59a81b9b29"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false

var app = '';

firebase.auth().onAuthStateChanged(() => {
  if(!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
  }
});
