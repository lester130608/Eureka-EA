<template>
  <div class="philosophy">
    <div class="intro-section"
         style="background-position: bottom"
         v-bind:style="{ 'background-image': 'url(' + './default/images/home/slide-0.jpg' + ')' }">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-7 mx-auto text-center txt-info" data-aos="fade-up">
            <h1>{{ $t('view_philosophy.title') }}</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="site-section">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
<!--            <span class="text-serif text-primary">{{ $t('menu.Philosophy') }}</span>-->
            <h3 class="heading-center text-primary">{{ $t('menu.Philosophy') }}</h3>
            <p>
                {{ $t('view_philosophy.first_parrafo') }}

            </p>
            <p>
                {{ $t('view_philosophy.second_parrafo') }}
            </p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  export default {
    name: 'Philosophy',
    components: { }
  }
</script>
<style lang="scss">
  .philosophy{
    .txt-info{
      background-color: rgba(0, 0, 0, 0.45);
    }
    .site-section{
      p{
        font-size: 1.3em;;
      }
    }
    .intro-section{
      height: 350px;
    }
  }

</style>
