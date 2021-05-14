<template>
  <div id="section-scholarchips" class="scholarships">
    <div class="intro-section"
         style="background-position: inherit"
         v-bind:style="{ 'background-image': 'url(' + './default/images/scholarships/home2.jpg' + ')' }">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-7 mx-auto text-center txt-info" data-aos="fade-up">
            <h1>{{ $t('view_scholarships.title') }}</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="site-section ">
      <div class="container-fluid">
        <div class="row justify-content-center mb-5">
          <div class="col-md-7 text-center">
            <!--                        <h3 class="heading-center text-primary">{{ $t('view_scholarships.title') }}</h3>-->
            <p>
              {{ $t('view_scholarships.description') }}
            </p>
<!--            <h4 class="text-primary text-center">{{ $t('view_scholarships.subtitle') }}</h4>-->

          </div>
        </div>
        <div class="row">

          <div class="col-md-4 mb-4">
            <div class="service-39381 scholarships-box">
              <img src="../../public/default/images/scholarships/1.jpg" alt="Image" class="img-fluid">
              <div class="p-4 scholarships-header">
                <h4 class="text-primary">{{ $t('view_scholarships.florida_tax_credit') }}</h4>
                <!--                                <h6><span class="badge badge-primary">{{ $t('view_scholarships.income_based') }}</span></h6>-->
              </div>
              <p>{{ $t('view_scholarships.florida_tax_credit_description') }}</p>
              <a href="https://www.stepupforstudents.org/lower-income-scholarships-ftc-fes/" target="_blank">
                <input class="apply_button btn btn-primary py-3 px-5" v-bind:value=" $t('apply_now')">
              </a>

            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="service-39381 scholarships-box">
              <img src="../../public/default/images/scholarships/2.jpg" alt="Image" class="img-fluid">
              <div class="p-4 scholarships-header">
                <h4 class="text-primary">{{ $t('view_scholarships.gardiner_scholarship') }}</h4>
                <!--                                <h6><span class="badge badge-primary">{{ $t('view_scholarships.special_needs') }}</span></h6>-->
              </div>
              <p>{{ $t('view_scholarships.gardiner_scholarship_description1') }}</p>
              <a href="https://www.stepupforstudents.org/logins/special-needs-login/" target="_blank">
                <input class="apply_button btn btn-primary py-3 px-5" v-bind:value=" $t('apply_now')">
              </a>
              <p>{{ $t('view_scholarships.gardiner_scholarship_description2') }}<a
                  href="https://www.stepupforstudents.org/for-parents/specialneeds/interest-list/" target="_blank">{{
                  $t('view_scholarships.click_here')
                }}</a>
              </p>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="service-39381 scholarships-box">
              <img src="../../public/default/images/scholarships/3.jpg" alt="Image" class="img-fluid">
              <div class="p-4 scholarships-header">
                <h4 class="text-primary">{{ $t('view_scholarships.john_mcKay_scholarship') }}</h4>
                <!--                                <h6>-->
                <!--&lt;!&ndash;                                    <span class="badge badge-primary">{{ $t('view_scholarships.income_based') }}</span>&ndash;&gt;-->
                <!--&lt;!&ndash;                                    <span class="badge badge-primary">{{ $t('view_scholarships.previously_attended') }}</span>&ndash;&gt;-->
                <!--                                </h6>-->
              </div>
              <p>{{ $t('view_scholarships.john_mcKay_scholarship_description') }}</p>
              <a href="https://www.floridaschoolchoice.org/Intent/McKayIntent/StudentIntent.aspx/" target="_blank">
                <input class="apply_button btn btn-primary py-3 px-5" v-bind:value=" $t('apply_now')">
              </a>
            </div>
          </div>
        </div>

      </div>
      <div class="col-md-12 before_footer">
        <h4 class="text-color">{{ $t('view_scholarships.text_bottom') }}</h4>
        <input @click="$bvModal.show('bv-modal-example')" class="bottom-contact btn btn-primary py-3 px-5" v-bind:value=" $t('menu.ContactUs')">
      </div>
    </div>


    <!-- TODO MODAL DE SCHOLARSHIP-->
    <!--        <div>-->
    <!--            <b-modal id="bv-modal-example" hide-footer centered>-->
    <!--                <template #modal-title>-->
    <!--                    <img width="40px" class="img-thumbnail" src="../../public/default/images/scholarships/schollarship.svg" alt="">-->
    <!--                    {{ $t('hello') }}!!!-->
    <!--                </template>-->
    <!--                <div class="d-block text-center">-->
    <!--                    <h3> {{ $t('view_scholarships.message') }}</h3>-->
    <!--                </div>-->

    <!--                <b-button class="mt-3 btn-primary" block @click="$bvModal.hide('bv-modal-example')">-->
    <!--                    <router-link class="nav-link text-left" to="/contact">{{ $t('menu.ContactUs') }}</router-link>-->
    <!--                </b-button>-->
    <!--            </b-modal>-->
    <!--        </div>-->
  </div>
</template>

<script>
export default {
  name: "Scholarships"
}
</script>

<style lang="scss">
@import "../assets/scss/variables";

.modal-title {
  text-align: center;
  width: 100%;
}
.site-section p{
  font-size: 1.2em !important;
}
.btn-primary {
  color: #fff;
  background-color: $primary-color !important;
  border-color: $primary-color !important;

  a {
    color: white;
    text-align: center !important;
  }
}

.scholarships-box {
  height: auto !important;
  padding: 5px !important;
  p{
    font-size: 1em !important;
  }
  img{
    height: 150px !important;
  }
}

.scholarships-header {
  height: 75px !important;
  margin-bottom: 15px;
}

.apply_button {
  margin-bottom: 18px !important;
  &:hover {
    transform: scale(1.05);
  }
}

.before_footer {
  height: 180px;
  align-items: center;
  justify-content: center;
  padding: 15px 150px;
}
.text-color{
  color: $bg-footer2;
}

.bottom-contact{
  margin-top:20px;
  bottom: 15px;
  &:hover {
    transform: scale(1.05);
  }
}

@media screen and (max-width: 425px) {
  .before_footer{
    padding: 0;
    height: 200px;
  }
}

@media screen and (max-width: 768px){
  .apply_button{
    width: 90%;
  }
}

</style>
