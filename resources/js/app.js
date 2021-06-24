import { createApp } from 'vue'
import App from './axil-main/src/App.vue'
import router from './axil-main/src/router'
import axios from 'axios'
import store from './axil-main/src/store'

const vueSetup = createApp(App)
vueSetup.use(router)
vueSetup.use(store)
vueSetup.mount('#app')