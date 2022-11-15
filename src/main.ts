import { createApp } from 'vue'
import App from './App.vue'
import { PackagePlugin } from 'ethos-connect-vue';

import './assets/main.css'

createApp(App)
    .use(PackagePlugin)
    .mount('#app')
