import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import hector from './components/hector.vue';
import about from './components/about.vue';


const routes = [
    {
        path: '/',
        name: 'Home',
        component: hector
    },
    {
        path: '/about',
        name: 'About',
        component: about
    }
 ]

 const router = createRouter({
        history: createWebHistory(),
        routes
 })


 createApp(App).use(router).mount('#app')
