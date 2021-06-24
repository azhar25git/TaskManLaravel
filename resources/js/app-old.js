require('./bootstrap');

import {createApp} from 'vue';
// import Vuex from 'vuex';
import Draggable from 'vuedraggable';
// import VueRouter from 'vue-router';

// Vue.use(VueRouter);

import router from './axil-main/src/router.js';

import App from './axil-main/src/App.vue';
// import Home from './axil-main/src/pages/Home.vue';

const app = createApp({
    el: '#app',
    router: router,
    components: { App, Draggable }
}).mount('#app');
// const app = new Vue({
    
// });

export default app;
