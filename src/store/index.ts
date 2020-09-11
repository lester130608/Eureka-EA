import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lang: process.env.VUE_APP_I18N_LOCALE || 'en'
  },
  getters: {
    lang: state => state.lang
  },
  mutations: {
    changeLocale(state, lang) {
      state.lang = lang
    }
  },
  actions: {
  },
  modules: {
  }
})
