// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import home from './components/home/home'
import order from './components/order/order'
import mine from './components/mine/mine'
import good from './components/good/good'

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [{
  path: '/',
  component: home
}, {
  path: '/home',
  component: home
}, {
  path: '/order',
  component: order
}, {
  path: '/mine',
  component: mine
}, {
  path: '/good',
  component: good
}]

const router = new VueRouter({
  linkActiveClass: 'active',
  routes: routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

// router.push('/home')
