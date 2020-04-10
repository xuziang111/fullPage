import Vue from 'vue/dist/vue.esm.js'
// import App from './App.vue'
import Fullpage from '@/components/fullpage.vue'
Vue.config.productionTip = false

new Vue({
  components:{
    Fullpage,
  },
  data:{
    bgcolor:['#222','#333','#444','#555'],
    pages:4
  },
  methods:{

  }
  
  // render: h => h(App),
}).$mount('#app')
