import Vue from 'vue'
// import axios from 'axios'
// import VueAxios from 'vue-axios'
import './plugins/bootstrap-vue'
import { ModalPlugin } from 'bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'

Vue.config.productionTip = false;
Vue.use(ModalPlugin);
// Vue.use(VueAxios, axios);
new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app');
