<template>
  <div class="faq-page">
    <div class="background-image intro-section site-blocks-cover innerpage"
         v-bind:style="{ 'background-image': 'url(' + './default/images/faq7.jpg' + ')' }">
      <div class="container">
        <div class="row align-items-center text-center ">
          <div class="col-lg-12 mt-5 txt-info" data-aos="fade-up">
            <h1>{{ $t('menu.FAQ') }}</h1>
            <p class="text-white text-center">
              <router-link to="/">{{ $t('menu.Home') }}</router-link>
              <span class="mx-2">/</span>
              <router-link to="/contact"><span>{{ $t('menu.ContactUs') }}</span></router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="site-section">
      <div class="container">
        <div class="row align-items-center justify-content-center flex text-center">
           <div class="col-12 align-items-center flex justify-content-center text-center">
            <vsa-list v>
              <!-- Here you can use v-for to loop through items  -->
              <vsa-item>
                <vsa-heading>
                  {{ $t('faq.question1') }}
                </vsa-heading>
                <vsa-content>
                  {{ $t('faq.answer1') }}
                </vsa-content>
              </vsa-item>
              <vsa-item>
                <vsa-heading>
                  {{ $t('faq.question2') }}
                </vsa-heading>
                <vsa-content>
                  {{ $t('faq.answer2') }}
                </vsa-content>
              </vsa-item>
              <vsa-item>
                <vsa-heading>
                  {{ $t('faq.question3') }}
                </vsa-heading>
                <vsa-content>
                  {{ $t('faq.answer3') }}
                </vsa-content>
              </vsa-item>
              <vsa-item>
                <vsa-heading>
                  {{ $t('faq.question4') }}
                </vsa-heading>
                <vsa-content>
                  {{ $t('faq.answer4') }}
                </vsa-content>
              </vsa-item>
              <vsa-item>
                <vsa-heading>
                  {{ $t('faq.question5') }}
                </vsa-heading>
                <vsa-content>
                  {{ $t('faq.answer5') }}
                </vsa-content>
              </vsa-item>
              <vsa-item>
                <vsa-heading>
                  {{ $t('faq.question6') }}
                </vsa-heading>
                <vsa-content>
                  {{ $t('faq.answer6') }}
                </vsa-content>
              </vsa-item>
              <vsa-item>
                <vsa-heading>
                  {{ $t('faq.question7') }}
                </vsa-heading>
                <vsa-content>
                  {{ $t('faq.answer7') }}
                </vsa-content>
              </vsa-item>
              <vsa-item>
                <vsa-heading>
                  {{ $t('faq.question8') }}
                </vsa-heading>
                <vsa-content>
                  {{ $t('faq.answer8') }}
                </vsa-content>
              </vsa-item>
              <vsa-item>
                <vsa-heading>
                  {{ $t('faq.question9') }}
                </vsa-heading>
                <vsa-content>
                  {{ $t('faq.answer9') }}
                </vsa-content>
              </vsa-item>
            </vsa-list>


          </div>
        </div>
      </div>
    </div>
  </div>



</template>
<script>
import {
  VsaList,
  VsaItem,
  VsaHeading,
  VsaContent,
  VsaIcon
} from 'vue-simple-accordion';
import 'vue-simple-accordion/dist/vue-simple-accordion.css';
import SendEmailContactCmp from '@/components/SendEmailContactCmp';



export default {
  name: 'faq',
  components: {
    SendEmailContactCmp,
    VsaList,
    VsaItem,
    VsaHeading,
    VsaContent,
    VsaIcon

  }

}


</script>
<style lang="scss">
@import "../assets/scss/variables";


.faq-page {

  .txt-info {
    background-color: rgba(0, 0, 0, 0.45);
  }

  .background-image {
    background-size: cover;
    background-repeat: no-repeat;
    background-position:top;
    height: 550px;
  }

  .vsa-list {
    --vsa-max-width: 100% !important;
    --vsa-highlight-color: #1089ff !important;
  }

  .vsa-item {


    .vsa-item__trigger__content {
      text-align: left;
      font-size: 1rem;
      --vsa-default-icon-size: 0.6;
    }
  }
  @media screen and (max-width: 425px) {
    .vsa-list {
      --vsa-max-width: 100% !important;
    }
    .vsa-item {
      .vsa-item__trigger__content {
        font-size: 13px !important;
        font-weight: 200 !important;
        margin-right: 15%;
        text-align: left;
        --vsa-default-icon-size: 0.35;

      }
      .vsa-item__content{
        font-size: 13px;
      }

      .vsa-item__trigger__icon--is-default {
        transform: scale(0.35);
        right: 5%;
        position: absolute;
      }
      .width-complete{
        width: 100%;
      }


    }


  }
  @media screen and (max-width: 320px) {
    .vsa-list {
      --vsa-max-width: 100% !important;
          }
    .vsa-item {
      .vsa-item__trigger__content {
        font-size: 12px !important;
        font-weight: 100 !important;
        text-align: left;
        margin-right: 10%;
        --vsa-default-icon-size: 0.3;

      }
      .vsa-item__content{
        font-size: 13px;
      }
      .vsa-item__trigger__icon--is-default {
        transform: scale(0.33);
        right: 5%;
        position: absolute;
      }


    }




  }

}




</style>
