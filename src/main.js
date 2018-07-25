import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import index from './components/index.vue'


Vue.use(VueRouter)

const router = new VueRouter({
    routes :[
        { path: '/', component: index },
        { path: '/index', component: index },
        
    ]
  })
  

  import './assets/statics/site/css/style.css';

Vue.config.productionTip = false

new Vue({
    el:'#app',
  render: h => h(App),
  router
})
