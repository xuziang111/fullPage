import Vue from 'vue/dist/vue.esm.js'
// import App from './App.vue'
import Fullpage from '@/components/fullpage.vue'

import page1 from './page1.vue'
Vue.config.productionTip = false

new Vue({
  components:{
    Fullpage,
    page1
  },
  data:{
    bgcolor:['#222','#333','#444','#555'],
    pages:5,
    basecolor:'#999'
  },
  methods:{

  }
  
  // render: h => h(App),
}).$mount('#app')
