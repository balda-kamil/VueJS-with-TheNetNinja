import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'

// Use vue-resource package
Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes
});
// Filters
/*
Vue.filter('to-uppercase', function(value){
    return value.toUpperCase();
}); */

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})