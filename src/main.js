import { createApp } from 'vue'
import App from './App.vue'
import './theme.css'
import store from './store/index'
import router from './router/index'

createApp(App)
.use(router)
.use(store)
.mount('#app')
