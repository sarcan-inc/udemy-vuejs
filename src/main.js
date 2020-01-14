import Vue from 'vue'
import App from './App.vue'
import CommonHeader from './components/CommonHeader.vue'

Vue.config.productionTip = false
Vue.component("CommonHeader",CommonHeader);

new Vue({
  render: h => h(App),
}).$mount('#app')
