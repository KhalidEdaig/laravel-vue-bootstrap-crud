require('./bootstrap');
require('@fortawesome/fontawesome-free/js/all.js');
window.Vue = require('vue');

import App from './App.vue';
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import moment from 'moment'
import {
    routes
} from './routes';

Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.filter('formatDate', function (value) {
    if (value) {
        return moment(String(value)).format('MM/DD/YYYY')
    }
});
const router = new VueRouter({
    mode: 'history',
    routes: routes
});

const app = new Vue({
    el: '#app',
    router: router,
    render: h => h(App),
});
