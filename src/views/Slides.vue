<template>
  <div class="hero-slide owl-carousel site-blocks-cover">
    <div class="intro-section slide-1"
         style="background-position: bottom;"
         v-bind:style="{ 'background-image': 'url(' + './default/images/home/slide-0.jpg' + ')' }">
      <div class="container">
        <div class="row " style="padding-top: 100px;">
          <div class="text-center title-slide-black" data-aos="fade-up" style="z-index: 9999;width: 100%;">
            <h1>{{ $t('view_home.welcome') }}</h1>
            <p>{{ $t('slogan') }}</p>
            <p><router-link  class="btn btn-primary py-3 px-5" to="/philosophy">{{ $t('readmore') }}</router-link></p>
          </div>
        </div>
        <!--                      <div class="row align-items-center">-->
        <!--                          <div class="col-lg-7 mx-auto text-center" data-aos="fade-up">-->
        <!--                              <h1>Enjoy The Ocean With Your Family</h1>-->
        <!--                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, in distinctio nostrum laborum sed quisquam voluptate facilis non.</p>-->
        <!--                              <p><a href="#" class="btn btn-primary py-3 px-5">Read More</a></p>-->
        <!--                          </div>-->
        <!--                      </div>-->
      </div>
    </div>
    <div class="intro-section slide-2"
         style="background: bottom;background-repeat: no-repeat;"
         v-bind:style="{ 'background-image': 'url(' + './default/images/home/childs-2.svg' + ')' }" >
      <!--                  <img src="../../public/default/images/hero_1.jpg" alt="Image" class="img-fluid">-->
      <div class="container">
        <div class="row " style="padding-top: 100px;">
          <div class="text-center title-slide-white" data-aos="fade-up" style="z-index: 9999; width: 100%;">
            <h1>{{ $t('menu.Theraphy') }}</h1>
            <p>{{ $t('view_therapy.description') }}</p>
            <p><router-link  class="btn btn-primary py-3 px-5" to="/theraphy">{{ $t('readmore') }}</router-link></p>
          </div>
        </div>
      </div>
    </div>


  </div>
  <!-- END slider -->
</template>
<script>
  export default {
    name: 'Slides',
    components: { }
  }
</script>
<style lang="scss">
    .title-slide-black,.title-slide-white{
        height: auto;
        display: inline-table;
        border-radius: 5px;
        padding: 15px;
    }
    .title-slide-black{
        background: rgba(0, 0, 0, 0.62);
    }
    .title-slide-white{
        background: rgba(255, 255, 255, 0.8);
    }
</style>
