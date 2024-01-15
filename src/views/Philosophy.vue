<template>
  <div class="philosophy">
    <div class="intro-section"
         style="background-position: bottom"
         v-bind:style="{ 'background-image': 'url(' + './default/images/philosophy_photo.jpeg' + ')' }">
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
<!--            <h3 class="heading-center text-primary">{{ $t('menu.Philosophy') }}</h3>-->
            <p>
                {{ $t('view_philosophy.first_paragraph') }}

            </p>
            <p>
                {{ $t('view_philosophy.second_paragraph') }}
            </p>
            <p>
              {{ $t('view_philosophy.third_paragraph') }}
            </p>
            <input @click="$bvModal.show('bv-modal-example')"  class="btn btn-primary py-3 px-5" v-bind:value=" $t('learn_more')">
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
      background-position: center top !important;
      background-size: cover!important;
      height: 700px!important;
      background-repeat: no-repeat;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;



    }
  }

</style>
