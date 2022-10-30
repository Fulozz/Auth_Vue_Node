import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import Vuelidate from 'vuelidate'


import 'bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";


createApp(App).use(router, Vuelidate).mount('#app')
// TeSTE