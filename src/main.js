import Vue from 'vue'
import DefaultTemplate from './layouts/DefaultTemplate'
import router from './router'

Vue.config.productionTip = false

new Vue({
  render: h => h(DefaultTemplate),
  router
}).$mount('#app')
