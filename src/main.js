// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Hello from './components/Hello.vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

// use vue-resource and vue-router
Vue.use(VueResource)
Vue.use(VueRouter)

// router configuration
const routes = [
	{ path: '/', component: Hello }
]

const router = new VueRouter({
	routes
})

// start the app
const app = new Vue({
	router,
	render: h => h(App)
}).$mount('#app')
