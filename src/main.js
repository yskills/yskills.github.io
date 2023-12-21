import { createApp } from 'vue'
import * as onLoad from "vue-onload"
import App from './App.vue'


import './assets/main.css'
//Weihnachten
//import  './assets/event.css' 
//Neujahr
//import './assets/newYear.css'


createApp(App).use(onLoad.plugin).mount('#app')
