import './bootstrap';


import vue from 'vue'
window.Vue = vue;

import App  from './components/App.vue';


//importar axios

import VueAxios from 'vue-axios';

import axios from 'axios';

//configuramos el view router

import VueRouter from 'vue-router'
import { routes } from './routes';
import Vue from 'vue';
Vue.use(VueRouter);
Vue.use(VueAxios, axios);

const router = new VueRouter({
    mode:'history',
    routes: routes

});
const App = new Vue({
    el:'#app',
    router:router,
    render: h => h(App)
});







