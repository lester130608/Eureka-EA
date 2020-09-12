<template>
  <div class="contact">
    <div class="intro-section site-blocks-cover innerpage" v-bind:style="{ 'background-image': 'url(' + './default/images/services/contact.jpg' + ')' }">
      <div class="container">
        <div class="row align-items-center text-center">
          <div class="col-lg-12 mt-5 txt-info" data-aos="fade-up">
            <h1>{{ $t('contact.GetInTouch') }}</h1>
            <p class="text-white text-center">
              <a href="index.html">{{ $t('menu.Home') }}</a>
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
          <div class="col-md-6 form-group">
            <label for="fname">{{ $t('full_name')}}</label>
            <input type="text" id="fname" class="form-control form-control-lg">
          </div>
          <div class="col-md-6 form-group">
            <label for="lname">{{ $t('last_name')}}</label>
            <input type="text" id="lname" class="form-control form-control-lg">
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 form-group">
            <label for="eaddress">{{ $t('email_address')}}</label>
            <input type="text" id="eaddress" class="form-control form-control-lg">
          </div>
          <div class="col-md-6 form-group">
            <label for="tel">{{ $t('phone_number')}}</label>
            <input type="text" id="tel" class="form-control form-control-lg">
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 form-group">
            <label for="message">{{ $t('message')}}</label>
            <textarea name="" id="message" cols="30" rows="10" class="form-control"></textarea>
          </div>
        </div>

        <div class="row">
          <div class="col-12">
            <input type="submit" v-bind:value=" $t('sendmessage')" class="btn btn-primary rounded-0 px-3 px-5">
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
            <p>{{ $t('view_therapy.description') }}</p>
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
  export default {
    name: 'ContactUs',
    components: { }
  }
</script>
<style lang="scss">
   .contact{
     .txt-info{
       background-color: rgba(0, 0, 0, 0.45);
     }
   }
</style>
