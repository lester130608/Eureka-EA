<template>
  <div class="contact">
    <div class="intro-section site-blocks-cover innerpage" v-bind:style="{ 'background-image': 'url(' + './default/images/services/contact.jpg' + ')' }">
      <div class="container">
        <div class="row align-items-center text-center">
          <div class="col-lg-12 mt-5 txt-info" data-aos="fade-up">
            <h1>{{ $t('contact.ContactUs') }}</h1>
            <p class="text-white text-center">
              <router-link to="/">{{ $t('menu.Home') }}</router-link>
              <span class="mx-2">/</span>
              <span>{{ $t('menu.ContactUs') }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>


    <div class="site-section">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <SendEmailContactCmp/>
          </div>
        </div>
      </div>
    </div>

    <div class="section-bg style-1" style="background-image: url('images/hero_1.jpg');">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6 mb-5 mb-lg-0">
            <span class="icon flaticon-mortarboard"></span>
            <h3>{{ $t('menu.Philosophy') }}</h3>
            <p>{{ $t('view_philosophy.first_parrafo') }}</p>
          </div>
          <div class="col-lg-4 col-md-6 mb-5 mb-lg-0">
            <span class="icon flaticon-school-material"></span>
            <h3>{{ $t('menu.Theraphy') }}</h3>
            <p>{{ $t('view_therapy.first_paragraph') }}</p>
          </div>
          <div class="col-lg-4 col-md-6 mb-5 mb-lg-0">
            <span class="icon flaticon-library"></span>
            <h3>{{ $t('view_scholarships.title') }}</h3>
            <p>{{ $t('view_scholarships.description') }}</p>
            <p>{{ $t('view_scholarships.florida_tax_credit') }}</p>
            <p>{{ $t('view_scholarships.gardiner_scholarship') }}</p>
            <p>{{ $t('view_scholarships.john_mcKay_scholarship') }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import SendEmailContactCmp from '@/components/SendEmailContactCmp'
  export default {
    name: 'ContactUs',
    components: {SendEmailContactCmp }
  }
</script>
<style lang="scss">
   .contact{
     .txt-info{
       background-color: rgba(0, 0, 0, 0.45);
     }
   }
</style>
