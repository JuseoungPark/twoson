import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'

// 버튼 컴포넌트
import BtnSolid from '@/components/BtnSolid'
Vue.component ('BtnSolid', BtnSolid)
// 태그 컴포넌트
import Tag from '@/components/Tag'
Vue.component ('Tag', Tag)

Vue.config.productionTip = false

export const EventBus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
