//let s : string = "Hello ,TypeScript"
//document.querySelectorAll('.app')[0].innerHTML = s

//vue

import Vue from 'vue'
import ElementUI from 'element-ui';
import Router from "vue-router";
import 'element-ui/lib/theme-chalk/index.css';
import APP from "./APP.vue"
import topHeader from './components/topHeader.vue'
import training from './components/training.vue'

Vue.use(Router);
Vue.use(ElementUI);

const myRouter =  new Router({
     
    routes:[
        {
            path:'/',
            components:{
                topHeader,
                training,
            }
        }
    ]
 })


new Vue({
     el:'.app',
     myRouter,
     render: h =>h(APP)
 })