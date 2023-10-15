// import { createApp } from 'vue'
// import '../node_modules/bootstrap/dist/css/bootstrap.css';
//
// import App from './App.vue'
//
// createApp(App).mount('#app')

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from "./store/index.js";

const app = createApp(App);
app.use(router);
app.use(store); // Use the Vuex store
app.mount('#app');