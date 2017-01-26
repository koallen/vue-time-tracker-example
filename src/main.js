// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

// use vue-resource and vue-router
Vue.use(VueResource)
Vue.use(VueRouter)

// router configuration
const routes = [
	{ path: '/', component: App }
]

const router = new VueRouter({
	routes
})

// start the app
const app = new Vue({
	router
}).$mount('#app')
