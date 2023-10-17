// import { createApp } from 'vue'
// import '../node_modules/bootstrap/dist/css/bootstrap.css';
//
// import App from './App.vue'
//
// createApp(App).mount('#app')

import '../node_modules/bootstrap/dist/css/bootstrap.css';

import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUsers, faUser, faKey, faTriangleExclamation, faClock, faHeart} from '@fortawesome/free-solid-svg-icons'

library.add(faUsers)
library.add(faUser)
library.add(faKey)
library.add(faTriangleExclamation)
library.add(faClock);
library.add(faHeart)
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from "./store/index.js";

import {LoadingPlugin} from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';



const app = createApp(App);

app.use(LoadingPlugin);

app.use(router);
app.use(store); // Use the Vuex store
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app');