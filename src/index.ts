//let s : string = "Hello ,TypeScript"
//document.querySelectorAll('.app')[0].innerHTML = s

//vue

import Vue from 'vue'
import ElementUI from 'element-ui';
import Router from "vue-router";
import 'element-ui/lib/theme-chalk/index.css';
import App from "./App.vue"
import TopHeader from './components/TopHeader.vue'
import Training from './components/Training.vue'

Vue.use(Router);
Vue.use(ElementUI);

const myRouter =  new Router({
     
    routes:[
        {
            path:'/',
            components:{
                TopHeader,
                Training,
            }
        }
    ]
 })


new Vue({
     el:'.app',
     router: myRouter,
     render: h =>h(App)
 })