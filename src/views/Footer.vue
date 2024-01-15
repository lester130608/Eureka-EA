<template>
  <div class="footer bg-light-dark">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-2 offset-lg-1 col-12">
          <p class="mb-4">
            <img
              id="footer-logo"
              src="../../public/default/images/logo-eureka.svg"
              alt="Image"
              class="img-fluid maxWidth animated tada"
            />
          </p>
          <!--          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nemo minima qui dolor, iusto iure.</p>-->
          <!--          <p><a href="#">Learn More</a></p>-->
          <div class="row">
            <div class="col-6">
              <a
                href="https://www.facebook.com/eurekaeducationalacademymiami/"
                target="_blank"
              >
                <img
                  class="social-media"
                  src="../../public/default/images/facebook.png"
                />
              </a>
            </div>
            <div class="col-6">
              <a
                href="https://www.instagram.com/eurekaeducationalacademy/"
                target="_blank"
              >
                <img
                  class="social-media"
                  src="../../public/default/images/instagram.png"
              /></a>
            </div>
          </div>
        </div>
        <div class="col-lg-6 offset-lg-1 col-12">
          <div class="row">
            <div class="col-lg-6 bottom-footer text-left">
              <h1 class="footer-heading">{{ $t("foot_contact.text") }}</h1>
              <div class="mdquick-contact-icons d-flex second">
                <div class="icon align-self-start">
                  <span class="icon-phone text-primary"></span>
                </div>
                <div class="text">
                  <a href="tel:+13054206690" class="d-block"
                    >Phone: 305 420 6690</a
                  >
                </div>
              </div>

              <div class="mdquick-contact-icons d-flex second">
                <div class="icon align-self-start">
                  <span class="icon-phone text-primary"></span>
                </div>
                <div class="text">
                  <a href="tel:+13054206690" class="d-block"
                    >Fax: 305 420 5708</a
                  >
                </div>
              </div>

              <div class="quick-contact-icons d-flex third">
                <div class="icon align-self-start">
                  <span class="icon-envelope text-primary"></span>
                </div>
                <div class="text">
                  <a
                    href="mailto:info@theeurekaacademy.com?Subject=Contacting"
                    target="_blank"
                    class="d-block"
                    >info@theeurekaacademy.com</a
                  >
                </div>
              </div>
              <div class="quick-contact-icons d-flex third">
                <div class="icon align-self-start">
                  <span class="icon-envelope text-primary"></span>
                </div>
                <div class="text">
                  <a
                    href="mailto:dclement@theeurekaacademy.com?Subject=Contacting"
                    target="_blank"
                    class="d-block"
                    >dclement@theeurekaacademy.com</a
                  >
                </div>
              </div>
            </div>
            <div class="col-lg-3 text-lg-right text-sm-center">
              <!--                     <h3 class="footer-heading"><span>{{ $t('menu.ContactUs') }}</span></h3>-->
              <ul class="list-unstyled">
                <li>
                  <router-link class="" to="/">{{
                    $t("menu.Home")
                  }}</router-link>
                </li>
                <li>
                  <router-link class="" to="/about">{{
                    $t("menu.AboutUs")
                  }}</router-link>
                </li>
                <li>
                  <router-link class="" to="/philosophy">{{
                    $t("menu.Philosophy")
                  }}</router-link>
                </li>
                <li>
                  <router-link class="" to="/procurement">{{
                    $t("menu.Procurement")
                  }}</router-link>
                </li>
                 <li>
                  <router-link class="" to="/tuition">{{
                    $t("menu.Tuition")
                  }}</router-link>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 text-lg-right text-sm-center">
              <!--                     <h3 class="footer-heading"><span>{{ $t('foot_contact.our_services') }}</span></h3>-->
              <ul class="list-unstyled">
                <li>
                  <router-link class="" to="/theraphy">{{
                    $t("menu.Theraphy")
                  }}</router-link>
                </li>
                <li>
                  <router-link class="" to="/scholarships">{{
                    $t("menu.Scholarships")
                  }}</router-link>
                </li>
                <li>
                  <router-link class="" to="/admissions">{{
                    $t("menu.Admissions")
                  }}</router-link>
                </li>
                <li>
                  <a @click="$bvModal.show('bv-modal-example')">{{
                    $t("menu.ContactUs")
                  }}</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="disclaimer">
            {{ $t("foot_contact.disclaimer") }}
          </div>
        </div>
      </div>
    </div>

    <!--        <div class="col-lg-3">-->
    <!--          <h3 class="footer-heading"><span>Contact</span></h3>-->
    <!--          <ul class="list-unstyled">-->
    <!--            <li><a href="#">Help Center</a></li>-->
    <!--            <li><a href="#">Support Community</a></li>-->
    <!--            <li><a href="#">Press</a></li>-->
    <!--            <li><a href="#">FAQ</a></li>-->
    <!--            <li><a href="#">Our Partners</a></li>-->
    <!--          </ul>-->
    <!--        </div>-->

    <div class="container-fluid">
      <div class="row copyright-container">
        <div class="col-12">
          <div class="copyright">
            <p>
              <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
              Copyright &copy; All rights reserved |
              <a href="http://www.theeurekaacademy.com/" target="_blank"
                >Eureka Educational Academy</a
              >
              <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import LanguagePickerCmp from '@/components/LanguagePickerCmp.vue'

export default {
  name: "Footer",
  components: {},
};
</script>
<style lang="scss">
@import "src/assets/scss/variables";
.copyright-container {
  background-color: #1b2229;
}
.social-media {
  width: 80%;
}

.disclaimer {
  font-size: 12px;
  color: #fff;
  

  position: absolute; bottom: 0px

}

.modal-header {
  background-color: $primary-color;
  color: white;
  font-family: "Oswald", sans-serif;
  text-transform: uppercase;
  font-size: 16px !important;
  text-align: left;
  align-items: center !important;
}

.modal-design {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.modal-header .close {
  color: white;
}
.img-thumbnail {
  border: none !important;
}

@media screen and (max-width: 425px) {
  .modal-design {
    display: block !important;
    align-items: center !important;
    justify-content: center !important;
    margin: 0 auto !important;
  }
  .d-block-fix {
    font-size: 22px;
    display: flex !important;
    flex-direction: column !important;
    justify-content: center !important;
    align-items: center !important;
  }
  .img-style {
    align-items: center;
    justify-content: center;
    display: flex;
    width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .modal-design {
    display: block !important;
    align-items: center !important;
    justify-content: center !important;
  }
  .d-block-fix {
    font-size: 20px;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    flex-direction: column !important;
  }
  .img-style {
    align-items: center;
    justify-content: center;
    display: flex;
    width: 100%;
  }
}
</style>
