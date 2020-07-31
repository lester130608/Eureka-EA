<template>
  <div id="app">
<!--    <div id="nav">-->
<!--      <router-link to="/">{{ $t('home') }}</router-link> |-->
<!--      <router-link to="/about">{{ $t('about') }}</router-link>-->
<!--      <LanguagePickerCmp/>-->
<!--    </div>-->
<!--    <h1>{{ $t('message') }}</h1>-->
<!--    <div class="container-fluid">-->
<!--      <div class="row">-->
<!--        <div class="col-6">-->
<!--          COLUMNA  1-->
<!--        </div>-->
<!--        <div class="col-6">-->
<!--          COLUMNA  2-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
      <div id="loader" class="show fullscreen"><svg class="circular" width="48px" height="48px"><circle class="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee"/><circle class="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="#ff5e15"/></svg></div>


      <router-view/>
      <!-- Go to Top Link -->
      <a href="#" class="back-to-top">
          <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-up" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"/>
              <path fill-rule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8 3.707 5.354 6.354a.5.5 0 1 1-.708-.708l3-3z"/>
          </svg>
      </a>
  </div>
</template>
<script>
  import LanguagePickerCmp from '@/components/LanguagePickerCmp.vue';
  export default {
    name: 'App',
    components: {
      LanguagePickerCmp
    }
  }
</script>

<style lang="scss">
  @import "assets/scss/main";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
