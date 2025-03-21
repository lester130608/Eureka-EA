import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    config:{
      "production": {
        "emailUrl": "https://app.dttcoaching.com/ExternalContactUs"
      },
      "development": {
        "emailUrl": "http://dttcs.ddns.net:55555/dttcs/ExternalContactUs"
      }},
    lang: process.env.VUE_APP_I18N_LOCALE || 'en'
  },
  getters: {
    config: state => state.config,
    lang: state => state.lang
  },
  mutations: {
    changeConfig(state, localConfig) {
      state.config = localConfig
    },
    changeLocale(state, lang) {
      state.lang = lang
    }
  },
  actions: {
  },
  modules: {
  }
})
