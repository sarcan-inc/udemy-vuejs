import Vue from "vue";
import App from "./App.vue";
import CommonHeader from "./components/CommonHeader.vue";

Vue.config.productionTip = false;
Vue.component("CommonHeader", CommonHeader);
Vue.filter("upperCase", function(val) {
  return val.toUpperCase();
});
new Vue({
  render: h => h(App)
}).$mount("#app");
