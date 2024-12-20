import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import Question from './components/MainGame.vue';
import BeforeGame from "./components/BeforeGame.vue";


const routes = [
    { path: '/', component: Home },
    { path: '/pre_game', component: BeforeGame },
    { path: '/game', component: Question },


];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;