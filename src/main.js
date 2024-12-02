import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCh2sFzKpmGb72E3c6Nmau36ymtdcfYx4s",
    authDomain: "authfirebase-b610f.firebaseapp.com",
    projectId: "authfirebase-b610f",
    storageBucket: "authfirebase-b610f.firebasestorage.app",
    messagingSenderId: "1055930954442",
    appId: "1:1055930954442:web:021e273c85c7f86e60fa33",
    measurementId: "G-FSFY20TB8Y"
};

/* const app = initializeApp(firebaseConfig); */
initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app')
