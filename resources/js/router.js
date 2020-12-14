import VueRouter from 'vue-router'
import Vue from 'vue'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)

import Landing from './views/LandingPage.vue'

const routes = [
    {
        path:'/',
        component: Landing
    },
    // {
    //     path: '/auth',
    //     component: ''
    // }
]

export default new VueRouter({
    mode: "history",
    routes
})
