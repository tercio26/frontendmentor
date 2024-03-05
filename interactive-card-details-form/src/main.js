import './assets/css/main.scss';

import { createPinia } from 'pinia'
import { createApp } from 'vue'
import filters from './filters'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())

app.config.globalProperties.$filters = filters

app.mount('#app')
