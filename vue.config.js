module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    },
    css: {
      loaderOptions: {
        // require('~module/animated.css/animate.min.css')
        scss: {
          prependData: `@import "~@/assets/scss/_variables.scss";@import '~bootstrap';@import '~bootstrap-vue';`
        }
      }
    }
  }
}
