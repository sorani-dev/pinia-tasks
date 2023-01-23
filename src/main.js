import {createApp} from 'vue'
import App from './App.vue'
import 'material-icons/iconfont/material-icons.css'
import './assets/main.css'
import './assets/fonts/Poppins/stylesheet.css'
import './assets/fonts/VT323/stylesheet.css'
import {createPinia} from "pinia";
import {useTaskStore} from "@/store/TaskStore";

createApp(App).use(createPinia(useTaskStore)).mount('#app')
