<template>
  <div class="main-lang">
    <template v-for="(lang, index) in languages">
      <a v-bind:class="{ active: lang.active }"
              :key="`link${index}`"
              v-on:click="changeLanguage(lang)">{{$t(lang.title)}}</a>
      <strong :key="`sep${index}`" v-if="index == 0">|</strong>

    </template>

  </div>
</template>
<script>
export default {
  name: "LanguagePickerCmp",
  data() {
    const langs = [
      {
        title: "languages.spanish",
        value: "es",
        active: false
      },
      {
        title: "languages.english",
        value: "en",
        active: false
      }
    ];
    langs.find( f => f.value === this.$i18n.locale).active = true;
    this.$store.commit('changeLocale', this.$i18n.locale);
    return {
      languages: langs
    };
  },
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang.value;
      this.$store.commit('changeLocale', lang.value);
      this.languages.find( f => f.value !== lang.value).active = false;
      this.languages.find( f => f.value === lang.value).active = true;
    }
  }
};
</script>
<style lang="scss">
  @import "../assets/scss/variables";
.main-lang{
  font-size: small;
  strong{
    color:$bg-footer !important;
    padding: 3px;
  }
  a{
    color:silver;
    cursor: pointer;
    &.active{
      color: $primary-color!important;
      text-decoration: underline;
      /*padding: 5px;*/
      text-align: center;
      font-weight: 600;
    }
    &:focus::after {
      height: 5px;
      opacity: 1;
      transform: translateY(0px);
    }

    *, *:before, *:after {
      box-sizing: border-box;
      /* direction: rtl; */
    }
  }
}
</style>
