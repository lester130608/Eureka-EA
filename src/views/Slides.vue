<template>
  <!--  TODO NUEVOS CAMBIOS 23/3/2021-->
  <div class="principal-div">
    <div class="principal-text-home">
      <h1>{{ $t('view_home.welcome') }}</h1>
      <p>
        {{
          $t('view_home.first_paragraph')
        }}
      </p>
      <p>{{
          $t('view_home.second_paragraph')
        }}</p>
    </div>

    <div class="principal-picture">
    </div>
  </div>

  <!--  CODIGO DE JUAN LUIS PARA LOS SLIDES  -->

  <!--  <div class="hero-slide owl-carousel site-blocks-cover">-->
  <!--    <div class="intro-section slide-1"-->
  <!--         style="background-position: bottom;"-->
  <!--         v-bind:style="{ 'background-image': 'url(' + './default/images/home/slide-0.jpg' + ')' }">-->
  <!--      <div class="container">-->
  <!--        <div class="row " style="padding-top: 100px;">-->
  <!--          <div class="text-center title-slide-black" data-aos="fade-up" style="z-index: 9999;width: 100%;">-->
  <!--            <h1>{{ $t('view_home.welcome') }}</h1>-->
  <!--            <p>{{ $t('slogan') }}</p>-->
  <!--            <p><router-link  class="btn btn-primary py-3 px-5" to="/philosophy">{{ $t('readmore') }}</router-link></p>-->
  <!--          </div>-->
  <!--        </div>-->
  <!--        &lt;!&ndash;                      <div class="row align-items-center">&ndash;&gt;-->
  <!--        &lt;!&ndash;                          <div class="col-lg-7 mx-auto text-center" data-aos="fade-up">&ndash;&gt;-->
  <!--        &lt;!&ndash;                              <h1>Enjoy The Ocean With Your Family</h1>&ndash;&gt;-->
  <!--        &lt;!&ndash;                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, in distinctio nostrum laborum sed quisquam voluptate facilis non.</p>&ndash;&gt;-->
  <!--        &lt;!&ndash;                              <p><a href="#" class="btn btn-primary py-3 px-5">Read More</a></p>&ndash;&gt;-->
  <!--        &lt;!&ndash;                          </div>&ndash;&gt;-->
  <!--        &lt;!&ndash;                      </div>&ndash;&gt;-->
  <!--      </div>-->
  <!--    </div>-->
  <!--    <div class="intro-section slide-2"-->
  <!--         style="background: bottom;background-repeat: no-repeat;"-->
  <!--         v-bind:style="{ 'background-image': 'url(' + './default/images/home/childs-2.svg' + ')' }" >-->
  <!--      &lt;!&ndash;                  <img src="../../public/default/images/hero_1.jpg" alt="Image" class="img-fluid">&ndash;&gt;-->
  <!--      <div class="container">-->
  <!--        <div class="row " style="padding-top: 100px;">-->
  <!--          <div class="text-center title-slide-white" data-aos="fade-up" style="z-index: 9999; width: 100%;">-->
  <!--            <h1>{{ $t('menu.Theraphy') }}</h1>-->
  <!--            <p>{{ $t('view_therapy.description') }}</p>-->
  <!--            <p><router-link  class="btn btn-primary py-3 px-5" to="/theraphy">{{ $t('readmore') }}</router-link></p>-->
  <!--          </div>-->
  <!--        </div>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  FIN CODIGO DE JUAN LUIS PARA LOS SLIDES  -->


</template>
<script>
export default {
  name: 'Slides',
  components: {}
}
</script>
<style lang="scss">

//CODIGO DE JUAN LUIS
//.title-slide-black, .title-slide-white {
//  height: auto;
//  display: inline-table;
//  border-radius: 5px;
//  padding: 15px;
//}
//
//.title-slide-black {
//  background: rgba(0, 0, 0, 0.62);
//}
//
//.title-slide-white {
//  background: rgba(255, 255, 255, 0.8);
//}
//FIN DE CODIGO DE JUAN LUIS

.principal-picture {
  background-image: url('../../public/default/images/home/childs-2.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 500px;
}

.principal-text-home {
  color: dodgerblue;
  text-align: center;
  margin: 0 auto;
  padding: 50px;

  h1 {
    margin-top: 70px !important;
  }

  p {
    margin-top: 20px !important;
    font-size: 20px;
  }
}

@media screen and (max-width: 425px){
  .principal-picture {
    height: 250px;
  }

}

</style>
