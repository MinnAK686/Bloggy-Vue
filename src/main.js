import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Bootstrap CSS
import './assets/css/bootstrap.css'

import '@fortawesome/fontawesome-free/css/all.css'
import './assets/js/bootstrap.bundle.min'


createApp(App).use(router).mount('#app')
