// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import mavonEditor from 'mavon-editor'
import axios from "axios"
import layer from 'vue-layer'
import 'mavon-editor/dist/css/index.css'
import '../static/fonts/iconfont.css'

Vue.prototype.$layer=layer(Vue)
Vue.config.productionTip = false
Vue.use(mavonEditor)
Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
