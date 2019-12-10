//let s : string = "Hello ,TypeScript"
//document.querySelectorAll('.app')[0].innerHTML = s

//vue

import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import topHeader from './components/topHeader.vue'
import training from './components/training.vue'

Vue.use(ElementUI);

 new Vue({
    el:'.app', 
    components:{
        topHeader,
        training,
    },
    template: `<topHeader/> `
})